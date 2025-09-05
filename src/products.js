import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import QuantitySelector from "./components/quantityselector";
import { fetchData } from "./api/api-service";


function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    let [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 6;
    const navigate = useNavigate();

    const categories = [
        "All",
        "men's clothing",
        "jewelery",
        "electronics",
        "women's clothing"
    ];
    // categories.map((cate) => { console.log(cate) })
    useEffect(() => {
        getProducts();
    }, [page, selectedCategory]);

    const getProducts = async () => {

        try {
            // debugger
            const result = await fetchData(`products?page=${page}&category=${selectedCategory}`);
            // debugger
            setProducts([...result]);
            setTotalPages(Math.ceil(result.total / limit));
        } catch (error) {
            console.error("Error fetching products:", error);

        };
    }

    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success("Added to cart!");
    };

    const handleViewCart = () => {
        navigate("/addtocart");
    };
  ;

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">Products Page</h2>

   
            <div className="mb-4 text-center">
                <label className="me-2 fw-bold">Category:</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setPage(1);
                    }}
                    className="form-select d-inline-block w-auto"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat === "All"
                                ? "All"
                                : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100 text-center">
                            <img
                                src={product.image}
                                className="card-img-top p-3"
                                alt={product.title}
                                style={{ objectFit: "contain", height: "150px" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text text-muted">
                                    <strong>Category:</strong> {product.category}
                                </p>
                                <p>
                                    <strong>Price:</strong> ₹ {(product.price * 83).toFixed(2)}
                                </p>
                                <p className="small">
                                    {product.description.substring(0, 100)}...
                                </p>
                                <QuantitySelector
                                    initial={product.quantity || 1}
                                    onChange={(newQty) => {
                                        const updated = products.map((p) =>
                                            p.id === product.id ? { ...p, quantity: newQty } : p
                                        );
                                        setProducts(updated);
                                    }}
                                />
                                <button
                                    className="btn btn-primary mt-auto w-100 mb-2"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    className="btn btn-success w-100"
                                    onClick={handleViewCart}
                                >
                                    View Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => {
                        debugger
                        if (page !== 1) {
                            page = --page;
                            setPage(page);
                        }

                    }
                    }
                    // disabled={page === 1}
                    className="px-4 py-2 border rounded"
                >
                    ⬅ Prev
                </button>
                <span className="px-4 py-2">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => {
                        // debugger
                        page = ++page;
                        setPage(page);
                    }
                    }
                    // disabled={page === totalPages}
                    className="px-4 py-2 border rounded"
                >
                    Next ➡
                </button>
            </div>
        </div>
    );
}

export default Products;
