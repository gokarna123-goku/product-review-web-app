import React from "react";

const ProductFilter = ({ searchTerm, onSearchChange, filter, setFilter }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-neutral-200/40 p-4 rounded-lg mb-6">
            <input
                type="text"
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="Search products..."
                className="w-full md:w-1/3 px-3 h-11 rounded-md text-neutral-800 border border-neutral-300 focus:outline-none focus:border-teal-600"
            />
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <select
                    value={filter.category}
                    onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                    className="p-2 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-300 focus:outline-none focus:border-teal-600"
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Fashion">Fashion</option>
                </select>
                <select
                    value={filter.minRating}
                    onChange={(e) => setFilter({ ...filter, minRating: parseFloat(e.target.value) })}
                    className="p-2 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-300 focus:outline-none focus:border-teal-600"
                >
                    <option value={0}>All Ratings</option>
                    <option value={3}>3 Stars & Up</option>
                    <option value={4}>4 Stars & Up</option>
                    <option value={5}>5 Stars Only</option>
                </select>
            </div>
        </div>
    );
};

export default ProductFilter;
