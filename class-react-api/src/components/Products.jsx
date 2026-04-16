import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  console.log(product);

  const showData = async () => {
    setLoading(true);
    let response = await axios.get("https://fakestoreapi.com/products");
    setProduct(response.data);
    setLoading(false);
  };
  useEffect(() => {
    showData();
  }, []);
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center text-4xl font-bold">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div >
      {/* <button onClick={showData}>Show Products</button> */}
      <div className="flex flex-row flex-wrap w-full h-screen bg-slate-300 overflow-scroll gap-8">
        {product?.map((item) => {
          return (
            <div className="w-[300px]  border border-black flex flex-col justify-center items-center p-2">
              <img className="w-36" src={item.image} alt="" />
              <h2 className="font-bold">P Name: {item.title}</h2>
              <p>Price: {item.price}</p>
              {/* <p>Description: {item.description}</p> */}
              <p>Category: {item.category}</p>
            </div>
            // product = [item, item, item]
          );
        })}
      </div>
    </div>
  );
}

export default Products;
