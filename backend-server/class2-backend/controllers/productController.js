
import {product, products} from '../constant/product.js'

// for get product
export const getProduct= (req,res)=>{
    res.json(product);
}

// for create 
export const getProducts=(req,res)=>{
    const allProducts= {
        message: "all product successfully done",
        data: products
    };
    res.json(allProducts)
}