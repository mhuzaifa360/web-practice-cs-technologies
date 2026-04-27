import express from "express"
import { getProduct, getProducts } from "./controllers/productController.js"
import { products } from "./constant/product.js"
import { getSingleProduct } from "./controllers/productController.js"
const app = express()
const port = 3000

app.get('/getProduct', getProduct)
// app.post('/createProduct', createProduct)
app.get('/getProduct', getProduct)
app.get('/getProducts', getProducts)
app.get('/getSingleProducts/:id', getSingleProduct)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
