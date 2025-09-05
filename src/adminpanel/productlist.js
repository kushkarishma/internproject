import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../api/api-service";

function ProductList() {
  const [products, setProducts] = useState([]);

  const viewList = async () => {
    try {
      const result = await fetchData("products");
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  useEffect(() => {
    viewList();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Product List</h2>
        <Link to="/adminpage/addproduct" className="btn btn-primary">
          ➕ Add New Product
        </Link>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price ($)</th>
              <th>Category</th>
              <th>Description</th>
              <th style={{ width: "160px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "50px", height: "50px", objectFit: "contain" }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>{item.category}</td>
                  <td style={{ maxWidth: "300px" }}>{item.description}</td>
                  <td>
                    <Link
                      to={`/edit-product/${item.id}`}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </Link>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
