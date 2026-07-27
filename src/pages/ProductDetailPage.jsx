import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Plus, Minus } from 'lucide-react';
import ProductCard from '../components/ProductCard';

function ProductDetailPage({ products, addToCart, addToWishlist }) {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedShade, setSelectedShade] = useState(product?.shades?.[0] || '');

    const relatedProducts = useMemo(() => products.filter((item) => item.category === product?.category && item.id !== product?.id).slice(0, 3), [product?.category, product?.id, products]);

    if (!product) {
        return <div className="rounded-[30px] border border-slate-200 bg-white/80 p-10 text-center shadow-sm">This product is currently unavailable.</div>;
    }

    return (
        <div className="space-y-8">
            <section className="grid gap-6 rounded-[32px] border border-slate-200 bg-white/80 p-6 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <img src={product.gallery[selectedImage] || product.image} alt={product.name} className="h-[480px] w-full rounded-[30px] object-cover" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                        {product.gallery.map((image, index) => (
                            <button key={image} onClick={() => setSelectedImage(index)} className={`overflow-hidden rounded-[18px] border ${selectedImage === index ? 'border-rose' : 'border-slate-200'}`}>
                                <img src={image} alt={`${product.name}-${index}`} className="h-24 w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose">{product.category}</p>
                    <h1 className="mt-2 font-display text-3xl text-plum">{product.name}</h1>
                    <p className="mt-3 text-slate-600">{product.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <div className="flex items-center gap-1 text-amber-500"><Star size={15} fill="currentColor" />{product.rating}</div>
                        <span>• {product.reviews} reviews</span>
                    </div>
                    <div className="mt-4 flex items-end gap-3">
                        <div className="text-3xl font-semibold text-plum">${product.price}</div>
                        <div className="text-sm text-slate-400 line-through">${product.originalPrice}</div>
                    </div>
                    <div className="mt-5">
                        <p className="text-sm font-semibold text-slate-700">Select shade</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {product.shades.map((shade) => <button key={shade} onClick={() => setSelectedShade(shade)} className={`rounded-full border px-3 py-2 text-sm ${selectedShade === shade ? 'border-rose bg-rose text-white' : 'border-slate-200 bg-white text-slate-600'}`}>{shade}</button>)}
                        </div>
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                        <div className="flex items-center rounded-full border border-slate-200 bg-mist p-1">
                            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="rounded-full p-2"><Minus size={16} /></button>
                            <span className="min-w-8 text-center font-semibold">{quantity}</span>
                            <button onClick={() => setQuantity((prev) => prev + 1)} className="rounded-full p-2"><Plus size={16} /></button>
                        </div>
                        <button onClick={() => addToCart(product, quantity)} className="flex items-center gap-2 rounded-full bg-rose px-4 py-3 font-semibold text-white"> <ShoppingBag size={16} /> Add to cart</button>
                        <button onClick={() => addToWishlist(product)} className="rounded-full border border-slate-200 bg-white p-3 text-slate-600"><Heart size={16} /></button>
                    </div>
                    <div className="mt-6 rounded-[24px] bg-mist p-4 text-sm text-slate-600">
                        <p className="font-semibold text-plum">Selected: {selectedShade}</p>
                        <p className="mt-1">Crafted with {product.ingredients} for a polished, comfortable finish.</p>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                    <h2 className="font-display text-2xl text-plum">Ingredients & details</h2>
                    <p className="mt-3 text-slate-600">This formula blends botanicals, peptides, and skin-loving emollients to create a cushiony finish that feels lightweight and luxurious.</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {product.tags.map((tag) => <span key={tag} className="rounded-full bg-mist px-3 py-1 text-sm text-slate-700">{tag}</span>)}
                    </div>
                </div>
                <div className="rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                    <h2 className="font-display text-2xl text-plum">Frequently bought together</h2>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <div className="flex items-center justify-between rounded-[16px] border border-slate-200 px-4 py-3">VR Dew Serum <span className="font-semibold text-plum">$72</span></div>
                        <div className="flex items-center justify-between rounded-[16px] border border-slate-200 px-4 py-3">VR Silk Mist <span className="font-semibold text-plum">$34</span></div>
                        <div className="flex items-center justify-between rounded-[16px] border border-slate-200 px-4 py-3">Double cleanse duo <span className="font-semibold text-plum">$58</span></div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-display text-2xl text-plum">Related products</h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {relatedProducts.map((item) => <ProductCard key={item.id} product={item} addToCart={addToCart} addToWishlist={addToWishlist} compact />)}
                </div>
            </section>
        </div>
    );
}

export default ProductDetailPage;
