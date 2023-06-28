const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Create a new record
const createRecord = async (tableName, record) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert(record)
      .single();
      
    if (error) {
      throw error;
    }
    
    console.log('Record created:', data);
  } catch (error) {
    console.error('Error creating record:', error.message);
  }
};

// Read records
const readRecords = async (tableName, filters = {}) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select()
      .match(filters);
      
    if (error) {
      throw error;
    }
    
    console.log('Records found:', data);
  } catch (error) {
    console.error('Error reading records:', error.message);
  }
};

// Update a record
const updateRecord = async (tableName, recordId, updatedFields) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .update(updatedFields)
      .eq('id', recordId)
      .single();
      
    if (error) {
      throw error;
    }
    
    console.log('Record updated:', data);
  } catch (error) {
    console.error('Error updating record:', error.message);
  }
};

// Delete a record
const deleteRecord = async (tableName, recordId) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', recordId)
      .single();
      
    if (error) {
      throw error;
    }
    
    console.log('Record deleted:', data);
  } catch (error) {
    console.error('Error deleting record:', error.message);
  }
};

// Example usage
createRecord('users', { name: 'John Doe', age: 25 });
readRecords('users', { age: 'gte.18' });
updateRecord('users', 'RECORD_ID', { age: 26 });
deleteRecord('users', 'RECORD_ID');
