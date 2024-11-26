import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../constants/data";
import Navbar from "./Navbar";


const ProductPage = () => {
    const { id } = useParams();
    const product = productData.find((product) => product.id === parseInt(id));

    if (!product) return <div>Product not found!</div>;

    return (
        <div className="w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600 space-y-5">
            <Navbar />

            <div className="w-full space-y-8 px-16 py-8">
                <div className="max-w-full mx-auto">
                    <h2 className="text-3xl font-semibold text-indigo-500">{product.name}</h2>
                    <div className="flex justify-between mt-4">
                        <p className="text-lg">${product.price}</p>
                        <span className="text-yellow-400">{'⭐'.repeat(Math.round(product.rating))}</span>
                        <span className="text-sm text-neutral-400">{product.rating} / 5</span>
                    </div>
                    <img src={product.image} alt={product.name} className="w-full h-96 object-cover mt-4 rounded-lg" />
                    <div className="mt-6 text-neutral-200">
                        <h3 className="text-xl font-semibold">Description:</h3>
                        <p>{product.description}</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ProductPage;
