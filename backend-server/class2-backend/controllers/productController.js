
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

export const getSingleProduct=(req,res)=>{
    const id = req.params.id;
    const data = products.find((item)=>item.id == id)

    let message;
    if (data) {
        message = `data of id ${id} is found`;
    } else {
        message = `data of id ${id} is NOT found | try another id`;
    }
    
    const result= {
        message: message,
        SingleData : data
    }
    res.json(result)
}