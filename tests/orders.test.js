// Import required functions for testing
const { create, get, list, edit } = require('../orders');
const orderData = require('../data/order1.json');
const productTestHelper = require('./test-utils/productTestHelper'); // Assuming this is a custom helper file

describe('Orders Module', () => {
  let createdOrder;

  // Setup before running tests
  beforeAll(async () => {
    // Setup any test data
    await productTestHelper.setupTestData();
    await productTestHelper.createTestOrders(5);
  });

  // Cleanup after all tests are run
  afterAll(async () => {
    await productTestHelper.cleanupTestData();
  });

  // Test the 'list' functionality
  describe('list', () => {
    it('should list orders', async () => {
      const orders = await list();
      // Ensure the orders list contains more than 4 orders
      expect(orders.length).toBeGreaterThan(4);
    });
  });

  // Test the 'create' functionality
  describe('create', () => {
    it('should create an order', async () => {
      // Call the 'create' function with mock order data
      createdOrder = await create(orderData);
      // Validate the order is created and matches the provided data
      expect(createdOrder).toBeDefined();
      expect(createdOrder.buyerEmail).toBe(orderData.buyerEmail);
    });
  });

  // Test the 'get' functionality (retrieve order by ID)
  describe('get', () => {
    it('should retrieve an order by id', async () => {
      const order = await get(createdOrder._id);
      // Validate the retrieved order matches the created order's ID
      expect(order).toBeDefined();
      expect(order._id).toEqual(createdOrder._id);
    });
  });

  // Test the 'edit' functionality (update order details)
  describe('edit', () => {
    it('should edit an order', async () => {
      const change = { buyerEmail: 'testemail@gmail.com' };
      const editedOrder = await edit(createdOrder._id, change);

      // Validate that the order has been updated
      expect(editedOrder).toBeDefined();
      expect(editedOrder.buyerEmail).toBe('testemail@gmail.com');
    });
  });
});
