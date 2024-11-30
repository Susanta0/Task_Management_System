const express= require("express")
const cors = require("cors");
const {createItem, readItems, updateItems, readItemById, deleteItem}= require('./crud')
 const app = express()

 // Enable CORS for all origins
app.use(cors({
    origin: '*',  // Allow all origins to access
  }));

 app.use(express.json())

 app.get('/items', (req, res)=> {
    readItems((err, rows)=> {
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).json(rows)
        }
    })
 })


 // Fetch a single item by ID
app.get("/items/:id", (req, res) => {
    readItemById(req.params.id, (err, row) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (!row) {
        res.status(404).send("Item not found"); // Handle case where the item doesn't exist
      } else {
        res.status(200).json(row); // Respond with the single item
      }
    });
  });

 app.post('/additems', (req, res)=> {
    const {title, description, due_date, status}=req.body
    createItem(title, description, due_date, status, (err, data)=>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(201).send(`Item is added ID : ${data.id}`)
        }
    })
 })


 app.put('/edititems/:id', (req, res)=>{
    const {title, description, due_date, status}=req.body
    updateItems(req.params.id, title, description, due_date, status, (err)=>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Updated items")
        }
    })
 })


 app.delete('/deleteitems/:id', (req, res)=>{
    deleteItem(req.params.id, (err)=>{
        if(err){
            res.status(500).send(err.message)
        }else{
            res.status(200).send("Deleted items")
        }
    })
 })

 
 app.listen('3000', (r)=>{
    console.log("server is running");
    
 })