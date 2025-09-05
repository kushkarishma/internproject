import React, { useEffect, useState } from 'react';
import axios from 'axios'



function Productss() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        console.log("product-data", response.data);
        setproduct(response.data);
      })
      .catch(error => {
        console.log("Error fetching products:", error);
      })

  }, []);

  return (

    <div className="container mt-4">
      <h2 className="mb-4 text-center">All Products</h2>
      <div className="row">

        {product.map((item) => {
          return (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">

                <img
                  src={item.image}
                  className="card-img-top p-3"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">
                    <strong>Category:</strong> {item.category}
                  </p>
                  <p><strong>Price:</strong> {item.price}</p>
                  <p className="small">{item.description}</p>
                  <p className="text-muted"><small>{item.id}</small></p>
                  <button className="btn btn-primary w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </div>


  );
}

export default Productss;
