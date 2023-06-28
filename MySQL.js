const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'YOUR_HOST',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'YOUR_DATABASE'
});

// Connect to the database
connection.connect(error => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Create a new record
const createRecord = (tableName, record) => {
  const query = `INSERT INTO ${tableName} SET ?`;

  connection.query(query, record, (error, result) => {
    if (error) {
      console.error('Error creating record:', error);
    } else {
      console.log('Record created with ID:', result.insertId);
    }
  });
};

// Read records
const readRecords = (tableName, filters = {}) => {
  let query = `SELECT * FROM ${tableName}`;

  if (Object.keys(filters).length > 0) {
    const conditions = Object.entries(filters)
      .map(([field, value]) => `${field} = ${mysql.escape(value)}`)
      .join(' AND ');
    query += ` WHERE ${conditions}`;
  }

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error reading records:', error);
    } else {
      console.log('Records found:', results);
    }
  });
};

// Update a record
const updateRecord = (tableName, recordId, updatedFields) => {
  const query = `UPDATE ${tableName} SET ? WHERE id = ?`;

  connection.query(query, [updatedFields, recordId], (error, result) => {
    if (error) {
      console.error('Error updating record:', error);
    } else if (result.affectedRows === 0) {
      console.log('Record not found.');
    } else {
      console.log('Record updated successfully.');
    }
  });
};

// Delete a record
const deleteRecord = (tableName, recordId) => {
  const query = `DELETE FROM ${tableName} WHERE id = ?`;

  connection.query(query, recordId, (error, result) => {
    if (error) {
      console.error('Error deleting record:', error);
    } else if (result.affectedRows === 0) {
      console.log('Record not found.');
    } else {
      console.log('Record deleted successfully.');
    }
  });
};

// Example usage
createRecord('users', { name: 'John Doe', age: 25 });
readRecords('users', { age: 25 });
updateRecord('users', 1, { age: 26 });
deleteRecord('users', 1);
