const express = require('express')
const app = express()
const port = 3000

const mydata={
    name:'Huzaifa',
    age:2223,
    course:'web development',
    id:123
}
const car ={
  name: 'honda civic',
  model: 2026,
  type : 'hybrid'
}
// CRUD
// create read update delete
// post   get   put    delete
// install npm nodemon (for automatic save changes)
app.get('/mycar', (req, res) => {
//   res.send(mydata)
  res.json(car)
})


// for create data
app.use(express.json());
app.post('/create', (req, res) => {
  const products = req.body;
  const result = {
    message : "Product create successfully",
    data: products
  }  
    res.json(result )
    
})
app.put('/updateporducts/:id',(req,res) =>{
  const {id} = req.params;
  console.log("my roll no is :" ,id);
  
  res.json(`my roll no is  = ${id}`)
})

app.delete('/deleteproducts', (req, res) => {
    res.json('product deleted')
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


