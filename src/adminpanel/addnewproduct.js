import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postBackendData, getBackendData } from "../api/api-service";
import { toast } from "react-toastify";

function AddNewProduct() {
  const { id } = useParams();
  const isEditing = !!id;
  debugger
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

  useEffect(() => {
    if (isEditing) {
      const fetchProduct = async () => {
        try {
          const product = await getBackendData(`products/${id}`);
          debugger
          setFormData(product);
        } catch (error) {
          console.error("Error fetching product:", error);
          toast.error("Failed to load product!");
        }
      };
      fetchProduct();
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const result = await postBackendData(`products/${id}`, formData);
        console.log("Product Updated:", result);
        toast.success("Product updated successfully!");
      } else {
        const result = await postBackendData("products", formData);
        console.log("Product Added:", result);
        toast.success("Product added successfully!");
        setFormData({
          title: "",
          price: "",
          description: "",
          category: "",
          image: ""
        });
      }
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Error saving product!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h3 className="mb-3">{isEditing ? "Edit Product" : "Add Product"}</h3>
        <form onSubmit={handleSubmit}>
          {/* ID */}
          {/* <div className="mb-3">
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
          </div> */}

          {/* Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter product title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter product price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Enter product category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter image URL"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() =>
                setFormData({
                  id: "",
                  title: "",
                  price: "",
                  description: "",
                  category: "",
                  image: ""
                })
              }
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewProduct;
