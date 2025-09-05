import { useState } from "react";
import { Postdata } from "../api/api-service";

function AddNewProduct() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Postdata);
    try {
      const result = await Postdata("products", formData);
      console.log("Product Added:", result);
      alert(" Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };


  return (

    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h3 className="mb-3">Add / Edit Product</h3>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input
              type="number"
              className="form-control"
              id="id"
              placeholder="Enter product ID"
           onchange={handleChange} />
          </div>

         
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter product title"
            />
          </div>

         
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="price"
              placeholder="Enter price"
            />
          </div>

         
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              placeholder="Enter product description"
            ></textarea>
          </div>

       
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Enter category"
            />
          </div>

   
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="image"
              placeholder="Enter image URL"
            />
          </div>

      
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewProduct;
