import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../constants/data';
import { FaStar } from 'react-icons/fa6';

const Detail = () => {

    const { id } = useParams();
    const product = productData.find((product) => product.id === parseInt(id));

    if (!product) return <div>Product not found!</div>;

    return (
        <div className='w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600 space-y-10 px-16 py-8'>
            {/* Product Details */}
            <div className="w-full grid grid-cols-5 gap-16 items-center">
                {/* Image section */}
                <div className="col-span-3">
                    <img src={product.image} alt={product.name} className="w-full aspect-video object-center object-cover mt-4 rounded-lg" />
                </div>

                {/* Content section */}
                <div className="col-span-2 space-y-5">
                    <div className="space-y-3">
                        <h2 className="text-4xl text-teal-600 font-bold">{product.name}</h2>
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">
                                {product.rating} / 5
                            </span>
                        </div>
                        <p className="text-lg text-neutral-800 font-bold">
                            ${product.price}
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="w-full space-y-7">
                <h2 className="text-3xl text-neutral-600 font-bold">Recent Reviews</h2>
                <div className="w-full grid grid-cols-3 gap-10">
                    {/* Review 1 */}
                    <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-300 space-y-2">
                        <h3 className="text-xl text-neutral-800 font-semibold">Title is here 1</h3>
                        {/* rating adn values */}
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">
                                {product.rating} / 5
                            </span>
                        </div>
                        {/* Review */}
                        <p className="text-sm text-neutral-500 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestias reprehenderit! Alias exercitationem rerum nostrum!
                        </p>
                        {/* user info and date */}
                        <div className="flex items-center justify-between w-full">
                            <p className="text-sm text-neutral-500 font-normal">John Doe</p>
                            <p className="text-sm text-neutral-500 font-normal">2024-11-28</p>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-300 space-y-2">
                        <h3 className="text-xl text-neutral-800 font-semibold">Title is here 2</h3>
                        {/* rating adn values */}
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">
                                {product.rating} / 5
                            </span>
                        </div>
                        {/* Review */}
                        <p className="text-sm text-neutral-500 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestias reprehenderit! Alias exercitationem rerum nostrum!
                        </p>
                        {/* user info and date */}
                        <div className="flex items-center justify-between w-full">
                            <p className="text-sm text-neutral-500 font-normal">John Doe</p>
                            <p className="text-sm text-neutral-500 font-normal">2024-11-28</p>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-300 space-y-2">
                        <h3 className="text-xl text-neutral-800 font-semibold">Title is here 3</h3>
                        {/* rating adn values */}
                        <div className="flex items-center">
                            <span className="text-yellow-500 flex items-center gap-0.5">
                                {[...Array(Math.round(product.rating))].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </span>
                            <span className="ml-2 text-sm">
                                {product.rating} / 5
                            </span>
                        </div>
                        {/* Review */}
                        <p className="text-sm text-neutral-500 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, molestias reprehenderit! Alias exercitationem rerum nostrum!
                        </p>
                        {/* user info and date */}
                        <div className="flex items-center justify-between w-full">
                            <p className="text-sm text-neutral-500 font-normal">John Doe</p>
                            <p className="text-sm text-neutral-500 font-normal">2024-11-28</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detail