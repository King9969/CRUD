const firebase = require('firebase');

// Initialize Firebase
const config = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};
firebase.initializeApp(config);

// Get a reference to the Firestore database
const db = firebase.firestore();

// Create a new document
const createDocument = async (collectionName, document) => {
  try {
    const docRef = await db.collection(collectionName).add(document);
    console.log('Document created with ID:', docRef.id);
  } catch (error) {
    console.error('Error creating document:', error);
  }
};

// Read documents
const findDocuments = async (collectionName, query) => {
  try {
    const snapshot = await db.collection(collectionName).where(query.field, query.operator, query.value).get();
    const documents = snapshot.docs.map(doc => doc.data());
    console.log('Documents found:', documents);
  } catch (error) {
    console.error('Error finding documents:', error);
  }
};

// Update a document
const updateDocument = async (collectionName, documentId, update) => {
  try {
    const docRef = db.collection(collectionName).doc(documentId);
    await docRef.update(update);
    console.log('Document updated with ID:', documentId);
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

// Delete a document
const deleteDocument = async (collectionName, documentId) => {
  try {
    await db.collection(collectionName).doc(documentId).delete();
    console.log('Document deleted with ID:', documentId);
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};

// Example usage
createDocument('users', { name: 'John Doe', age: 25 });
findDocuments('users', { field: 'age', operator: '>=', value: 18 });
updateDocument('users', 'DOCUMENT_ID', { age: 26 });
deleteDocument('users', 'DOCUMENT_ID');
