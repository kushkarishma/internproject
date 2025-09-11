import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBackendData, deleteBackendData } from "../api/api-service";
import { toast } from "react-toastify";

function ProductList() {
  const [products, setProducts] = useState([]);

  const getProductsById = async () => {
    try {
      const result = await getBackendData("products");
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteBackendData(`products/${id}`);
        setProducts(products.filter((item) => item.id !== id));
        toast.success("Product deleted successfully!");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  useEffect(() => {
    getProductsById();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Product List</h3>
        <Link to="/adminpage/addproduct" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>{p.price}</td>
              <td>{p.category}</td>
              <td>
                <Link to={`/adminpage/addproduct/${p.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
