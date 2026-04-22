const express = require('express')
const app = express()
const port = 3000

const mydata={
    name:'Huzaifa',
    age:2223,
    course:'web development',
    id:123
}
app.get('/mydata', (req, res) => {
//   res.send(mydata)
  res.json(mydata)
})
app.post('/create', (req, res) => {
    res.json('post called done')
    
})
app.delete('/delete', (req, res) => {
    res.json(mydata.age)
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


