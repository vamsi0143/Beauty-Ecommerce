import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';

function WishlistPage({ wishlist, addToCart, removeFromWishlist }) {
    return (
        <div className="space-y-6">
            <div className="rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose">Wishlist</p>
                        <h1 className="font-display text-3xl text-plum">Your saved favorites</h1>
                    </div>
                    <div className="rounded-full bg-mist px-3 py-1 text-sm font-semibold text-plum">{wishlist.length} saved</div>
                </div>
            </div>

            {wishlist.length === 0 ? (
                <div className="rounded-[30px] border border-slate-200 bg-white/80 p-10 text-center shadow-sm">
                    <p className="text-lg font-semibold text-plum">Nothing here yet — save a few favorites for later.</p>
                    <Link to="/shop" className="mt-4 inline-flex rounded-full bg-rose px-5 py-3 font-semibold text-white">Browse products</Link>
                </div>
            ) : (
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {wishlist.map((item) => (
                        <div key={item.id} className="rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm">
                            <img src={item.image} alt={item.name} className="h-48 w-full rounded-[20px] object-cover" />
                            <div className="mt-4">
                                <p className="font-semibold text-slate-800">{item.name}</p>
                                <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                                <p className="mt-3 text-lg font-semibold text-plum">${item.price}</p>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button onClick={() => addToCart(item)} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rose px-4 py-2.5 font-semibold text-white"><ShoppingBag size={16} /> Add</button>
                                <button onClick={() => removeFromWishlist(item.id)} className="rounded-full border border-slate-200 p-2.5 text-slate-600"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default WishlistPage;
