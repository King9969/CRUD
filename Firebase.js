const firebase = require('firebase/app');
require('firebase/database');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a new document
const createDocument = async (collectionName, document) => {
  try {
    const db = firebase.database().ref(collectionName);
    const newDocumentRef = db.push();
    await newDocumentRef.set(document);
    console.log('Document created:', newDocumentRef.key);
  } catch (error) {
    console.error('Error creating document:', error);
  }
};

// Read documents
const findDocuments = async (collectionName, query) => {
  try {
    const db = firebase.database().ref(collectionName);
    const snapshot = await db.once('value');
    const data = snapshot.val();

    const result = Object.values(data).filter(item => {
      // Filter based on the query
      // For example, query = { age: 18 }
      for (const key in query) {
        if (query[key] !== item[key]) {
          return false;
        }
      }
      return true;
    });

    console.log('Documents found:', result);
  } catch (error) {
    console.error('Error finding documents:', error);
  }
};

// Update a document
const updateDocument = async (collectionName, query, update) => {
  try {
    const db = firebase.database().ref(collectionName);
    const snapshot = await db.once('value');
    const data = snapshot.val();

    // Find the document based on the query
    for (const key in data) {
      const item = data[key];
      let isMatch = true;
      for (const queryKey in query) {
        if (query[queryKey] !== item[queryKey]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        // Update the document with the provided fields
        await db.child(key).update(update);
        console.log('Document updated:', key);
        return;
      }
    }

    console.log('Document not found for update.');
  } catch (error) {
    console.error('Error updating document:', error);
  }
};

// Delete a document
const deleteDocument = async (collectionName, query) => {
  try {
    const db = firebase.database().ref(collectionName);
    const snapshot = await db.once('value');
    const data = snapshot.val();

    // Find the document based on the query
    for (const key in data) {
      const item = data[key];
      let isMatch = true;
      for (const queryKey in query) {
        if (query[queryKey] !== item[queryKey]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        // Delete the document
        await db.child(key).remove();
        console.log('Document deleted:', key);
        return;
      }
    }

    console.log('Document not found for deletion.');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};

// Example usage
createDocument('users', { name: 'John Doe', age: 25 });
findDocuments('users', { age: 18 });
updateDocument('users', { name: 'John Doe' }, { age: 26 });
deleteDocument('users', { name: 'John Doe' });
