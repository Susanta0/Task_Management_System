const db = require("./database");

// CREATE

const createItem = (title, description, due_date, status, callback) => {
  const sql = `INSERT INTO items (title, description, due_date, status) VALUES(?, ?, ?, ?)`;
  db.run(sql, [title, description, due_date, status], function (err) {
    callback(err, { id: this.lastID });
  });
};

// READ
const readItems = (callback) => {
  const sql = `SELECT * FROM items`;
  db.all(sql, [], callback);
};

// Edit
const updateItems = (id, title, description, due_date, status, callback) => {
  const sql = `UPDATE items 
                    SET title = ?, 
                    description = ?, 
                    due_date = ?, 
                    status = ? 
                    WHERE id = ?`;
  db.run(sql, [title, description, due_date, status, id], callback);
};

// Fetch a single item by ID
function readItemById(id, callback) {
  const sql = "SELECT * FROM items WHERE id = ?"; // Replace 'items' with your table name
  db.get(sql, [id], (err, row) => {
    callback(err, row);
  });
}

// DeleteItem
const deleteItem = (id, callback) => {
    const sql= `DELETE FROM items WHERE id = ?`
    db.run(sql, id, callback)
};



module.exports ={createItem, readItems, updateItems, readItemById, deleteItem}