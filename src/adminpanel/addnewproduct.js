import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postData } from "../api/api-service";

function AddNewProduct() {
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    id: "",
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

  useEffect(() => {
    if (isEditing) {
      const fetchProduct = async () => {
        try {
          const product = await postData(`products/${id}`);
          setFormData(product);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
      fetchProduct();
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const result = await postData(`products/${id}`, formData);
        console.log("Product Updated:", result);
        alert("Product updated successfully!");
      } else {
        const result = await postData("products", formData);
        console.log("Product Added:", result);
        alert("Product added successfully!");
      }
    } catch (error) {
      console.error("Error saving product:", error);
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
              value={formData.id}
              onChange={handleChange}
              readOnly={isEditing}
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
