import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductFilter from "./components/ProductFilter";
import { productData } from "./constants/data";

const Product = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState({ category: "", minRating: 0 });

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const filteredProducts = productData.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filter.category === "" || product.category === filter.category) &&
            product.rating >= filter.minRating
        );
    });


    return (
        <div className='w-full'>
            <div className="p-8 space-y-5">
                <ProductFilter
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                    filter={filter}
                    setFilter={setFilter}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product