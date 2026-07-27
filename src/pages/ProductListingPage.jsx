import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { brands, categories, skinTypes } from '../data/products';

function ProductListingPage({ products, addToCart, addToWishlist }) {
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [selectedSkinType, setSelectedSkinType] = useState('All');
    const [maxPrice, setMaxPrice] = useState(120);
    const [sortBy, setSortBy] = useState('featured');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredProducts = useMemo(() => {
        const next = products.filter((product) => {
            const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(query.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
            const matchesSkin = selectedSkinType === 'All' || product.skinType.includes(selectedSkinType);
            const matchesPrice = product.price <= maxPrice;
            return matchesSearch && matchesCategory && matchesBrand && matchesSkin && matchesPrice;
        });

        switch (sortBy) {
            case 'price-low':
                return next.sort((a, b) => a.price - b.price);
            case 'price-high':
                return next.sort((a, b) => b.price - a.price);
            case 'rating':
                return next.sort((a, b) => b.rating - a.rating);
            default:
                return next;
        }
    }, [maxPrice, products, query, selectedBrand, selectedCategory, selectedSkinType, sortBy]);

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    return (
        <div className="space-y-6">
            <section className="rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose">Shop</p>
                        <h1 className="font-display text-3xl text-plum">Find your signature beauty edit</h1>
                    </div>
                    <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-slate-200 bg-mist px-4 py-3">
                        <Search size={18} className="text-slate-400" />
                        <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-transparent outline-none" placeholder="Search products, ingredients, or moods" />
                    </div>
                </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-[280px_1fr]">
                <aside className="rounded-[28px] border border-slate-200 bg-white/80 p-5 shadow-sm">
                    <div className="flex items-center gap-2 text-lg font-semibold text-plum"><SlidersHorizontal size={18} /> Filters</div>
                    <div className="mt-5 space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-600">Category</label>
                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full rounded-full border border-slate-200 bg-mist px-3 py-2 outline-none">
                                <option value="All">All categories</option>
                                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-600">Brand</label>
                            <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="w-full rounded-full border border-slate-200 bg-mist px-3 py-2 outline-none">
                                <option value="All">All brands</option>
                                {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-600">Skin type</label>
                            <select value={selectedSkinType} onChange={(e) => setSelectedSkinType(e.target.value)} className="w-full rounded-full border border-slate-200 bg-mist px-3 py-2 outline-none">
                                <option value="All">All types</option>
                                {skinTypes.map((skinType) => <option key={skinType} value={skinType}>{skinType}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-600">Max price ${maxPrice}</label>
                            <input type="range" min="20" max="120" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-rose" />
                        </div>
                    </div>
                </aside>

                <div>
                    <div className="mb-4 flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-slate-600">Showing <span className="font-semibold text-plum">{visibleProducts.length}</span> of <span className="font-semibold text-plum">{filteredProducts.length}</span> products</p>
                        <div className="flex items-center gap-2">
                            <ArrowUpDown size={16} className="text-slate-400" />
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded-full border border-slate-200 bg-mist px-3 py-2 text-sm outline-none">
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />)}
                    </div>
                    {visibleCount < filteredProducts.length && (
                        <div className="mt-6 text-center">
                            <button onClick={() => setVisibleCount((prev) => prev + 3)} className="rounded-full bg-plum px-5 py-3 font-semibold text-white">Load more</button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default ProductListingPage;
