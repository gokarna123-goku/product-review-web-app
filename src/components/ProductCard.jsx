import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-neutral-800 p-2 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-indigo-400">${product.price}</p>
            <div className="flex items-center mt-2">
                <span className="text-yellow-400">{'⭐'.repeat(Math.round(product.rating))}</span>
                <span className="ml-2 text-sm">{product.rating} / 5</span>
            </div>
            <Link to={`/product/${product.id}`} className="text-indigo-500 mt-4 inline-block">View Details</Link>
        </div>
    );
};

export default ProductCard;
