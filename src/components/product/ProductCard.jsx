import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className='w-full bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm cursor-pointer'>
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg object-center" />

            <div className="p-3 space-y-2">
                <h3 className="text-xl dont-semibold">
                    {product.name}
                </h3>
                <p className="text-indigo-400">
                    ${product.price}
                </p>
                {/* Map through the rating icons */}
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

                <Link to={`/product/${product.id}`} className='text-teal-600 mt-4 inline-block'>
                    View Details
                </Link>

            </div>

        </div>
    )
}

export default ProductCard