// Mock data to simulate products in the database
const mockProducts = [
    { description: 'Product 1' },
    { description: 'Product 2' },
  ];
  
  // Mock Mongoose Query object to simulate chainable query methods
  const mockQuery = {
    sort: jest.fn().mockReturnThis(), // Allows chaining by returning 'this'
    skip: jest.fn().mockReturnThis(), // Allows chaining by returning 'this'
    limit: jest.fn().mockReturnThis(), // Allows chaining by returning 'this'
    exec: jest.fn().mockResolvedValue(mockProducts), // Simulate DB query execution with mock data
    then: function (resolve) { resolve(mockProducts); } // Make the query 'thenable' (like a Promise)
  };
  
  // Mock Mongoose Model object to simulate methods on a Mongoose model
  const mockModel = {
    find: jest.fn().mockReturnValue(mockQuery), // Simulates a MongoDB query
    findById: jest.fn(), // Mock for finding a document by ID
    deleteOne: jest.fn(), // Mock for deleting a document
  };
  
  // Mock DB object that simulates the mongoose db interface
  const mockDb = {
    model: jest.fn().mockReturnValue(mockModel), // Returns our mockModel when model() is called
  };
  
  module.exports = {
    mockDb,        // Mocked DB object
    mockProducts,  // Mocked product data
    mockModel,     // Mocked Mongoose model
    mockQuery,     // Mocked query object
  };
  