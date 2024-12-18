const { mockDb, mockProducts, mockModel } = require('./db.mock');
const { list, get, destroy } = require('../products');

// Mock the db module to use our mockDb
jest.mock('../db', () => mockDb);

describe('Product Module', () => {
  // Clear all mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('list', () => {
    it('should list products', async () => {
      // Call the 'list' function, which should use the mock database
      const products = await list();
      
      // Check that the correct number of products are returned
      expect(products.length).toBe(2);
      
      // Check the descriptions of the products
      expect(products[0].description).toBe('Product 1');
      expect(products[1].description).toBe('Product 2');
    });
  });

  describe('get', () => {
    it('should get a product by id', async () => {
      // Mock the 'findById' method on the mock model to return a product
      mockModel.findById = jest.fn().mockResolvedValue({ description: 'Product 1' });

      // Call the 'get' function with a mock ID
      const product = await get('abc123');

      // Check if the product returned has the expected description
      expect(product).toBeDefined();
      expect(product.description).toBe('Product 1');
    });
  });

  describe('destroy', () => {
    it('should delete a product', async () => {
      // Mock the 'deleteOne' method to return a successful deletion
      mockModel.deleteOne = jest.fn().mockResolvedValue({ deletedCount: 1 });

      // Call the 'destroy' function with a mock ID
      const result = await destroy('abc123');

      // Check that the deletion was successful
      expect(result.deletedCount).toBe(1);
    });
  });
});
