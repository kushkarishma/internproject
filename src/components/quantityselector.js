import { useState } from "react";

function QuantitySelector({ initial = 1, onChange }) {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        if (onChange) onChange(newQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (onChange) onChange(newQuantity);
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-secondary" onClick={handleDecrease}>
                -
            </button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-secondary" onClick={handleIncrease}>
                +
            </button>
        </div>
    );
}

export default QuantitySelector;
