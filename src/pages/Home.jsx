import React, { useState } from 'react'
import { productData } from '../constants/data';
import ProductFilter from '../components/filter/ProductFilter';
import ProductCard from '../components/product/ProductCard';

const Home = () => {

    const [searchItem, setSearchItem] = useState('');
    const [filter, setFilter] = useState({ category: '', minRating: 0 });

    const handleSearchChange = (e) => {
        setSearchItem(e.target.value);
    }

    const filteredProducts = productData.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchItem.toLowerCase()) &&
            (filter.category === '' || product.category === filter.category) &&
            product.rating >= filter.minRating
        );
    })


    return (
        <div className='w-full px-16 py-8'>
            <div className="space-y-10">
                {/* Product Filter */}
                <ProductFilter
                    searchItem={searchItem}
                    onSearchChange={handleSearchChange}
                    filter={filter}
                    setFilter={setFilter}
                />

                {/* Product Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home