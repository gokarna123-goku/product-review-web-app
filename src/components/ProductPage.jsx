import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../constants/data";
import Navbar from "./Navbar";
import { FaStar } from "react-icons/fa6";


const ProductPage = () => {
    const { id } = useParams();
    const product = productData.find((product) => product.id === parseInt(id));

    if (!product) return <div>Product not found!</div>;

    return (
        <div className="w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600 space-y-10 px-16 py-8">
            {/* Product Details */}
            <div className="w-full grid grid-cols-5 gap-16 items-center">

                <div className="col-span-3">
                    <img src={product.image} alt={product.name} className="w-full aspect-video object-cover mt-4 rounded-lg" />
                </div>

                <div className="col-span-2 space-y-5">
                    <div className="space-y-3">
                        <h2 className="text-4xl font-bold text-teal-600">{product.name}</h2>
                        <div className="flex gap-3">
                            <p className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </p>
                            <p className="text-sm text-neutral-500 mt-1">({product.rating} / 5)</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold text-neutral-800">${product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>

            {/* Product Reviews */}
            <div className="w-full space-y-7">
                <h2 className="text-3xl font-bold text-neutral-600">Recent Reviews</h2>
                <div className="w-full grid grid-cols-3 gap-10">
                    <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 space-y-2">
                        <h3 className="text-xl font-semibold">Title</h3>
                        {/* rating and value */}
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">{product.rating} / 5</span>
                        </div>

                        {/* review */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique deserunt nemo vero iusto repellendus!
                        </p>

                        {/* user info, date */}
                        <div className="flex items-center justify-between">
                            <p className="font-normal text-sm text-neutral-500">John Doe</p>
                            <p className="font-normal text-sm text-neutral-500">2023-01-01</p>
                        </div>
                    </div>
                    <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 space-y-2">
                        <h3 className="text-xl font-semibold">Title</h3>
                        {/* rating and value */}
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">{product.rating} / 5</span>
                        </div>

                        {/* review */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique deserunt nemo vero iusto repellendus!
                        </p>

                        {/* user info, date */}
                        <div className="flex items-center justify-between">
                            <p className="font-normal text-sm text-neutral-500">John Doe</p>
                            <p className="font-normal text-sm text-neutral-500">2023-01-01</p>
                        </div>
                    </div>
                    <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 space-y-2">
                        <h3 className="text-xl font-semibold">Title</h3>
                        {/* rating and value */}
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">{product.rating} / 5</span>
                        </div>

                        {/* review */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, similique deserunt nemo vero iusto repellendus!
                        </p>

                        {/* user info, date */}
                        <div className="flex items-center justify-between">
                            <p className="font-normal text-sm text-neutral-500">John Doe</p>
                            <p className="font-normal text-sm text-neutral-500">2023-01-01</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductPage;
