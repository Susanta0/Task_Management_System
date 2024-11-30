const sqlite3= require(`sqlite3`).verbose()
const dbName= 'myDatabase.db'

let db= new sqlite3.Database(dbName, (err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Connected to the Database");
        db.run(`CREATE TABLE IF NOT EXISTS items (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT NOT NULL,
            description TEXT,
            due_date TEXT CHECK(due_date IS NULL OR due_date GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'),
            status BOOLEAN CHECK(status IN (0, 1))
            
            )`,(err)=> {
                if(err){
                    console.log("Error creating table:", err.message);
                } else {
                    console.log("Table created or already exists.");
                }
            })
        
    }
})

module.exports =db