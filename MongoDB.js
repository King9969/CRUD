const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

// Create a new document
const createDocument = async (collectionName, document) => {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const result = await collection.insertOne(document);
    console.log('Document created:', result.insertedId);
  } catch (error) {
    console.error('Error creating document:', error);
  } finally {
    client.close();
  }
};

// Read documents
const findDocuments = async (collectionName, query) => {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const result = await collection.find(query).toArray();
    console.log('Documents found:', result);
  } catch (error) {
    console.error('Error finding documents:', error);
  } finally {
    client.close();
  }
};

// Update a document
const updateDocument = async (collectionName, query, update) => {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const result = await collection.updateOne(query, { $set: update });
    console.log('Document updated:', result.modifiedCount);
  } catch (error) {
    console.error('Error updating document:', error);
  } finally {
    client.close();
  }
};

// Delete a document
const deleteDocument = async (collectionName, query) => {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    const result = await collection.deleteOne(query);
    console.log('Document deleted:', result.deletedCount);
  } catch (error) {
    console.error('Error deleting document:', error);
  } finally {
    client.close();
  }
};

// Example usage
createDocument('users', { name: 'John Doe', age: 25 });
findDocuments('users', { age: { $gte: 18 } });
updateDocument('users', { name: 'John Doe' }, { age: 26 });
deleteDocument('users', { name: 'John Doe' });
