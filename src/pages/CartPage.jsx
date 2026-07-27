import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, Sparkles } from 'lucide-react';

function CartPage({ cart, updateQuantity, subtotal, discount, shipping, total, addToCart }) {
    const recommended = [
        { id: 101, name: 'VR Silk Mist', price: 34, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80' },
        { id: 102, name: 'Glow Reset Mask', price: 28, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80' }
    ];

    return (
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
                <div className="rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose">Cart</p>
                            <h1 className="font-display text-3xl text-plum">Your beauty bag</h1>
                        </div>
                        <div className="rounded-full bg-mist px-3 py-1 text-sm font-semibold text-plum">{cart.length} items</div>
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="rounded-[30px] border border-slate-200 bg-white/80 p-10 text-center shadow-sm">
                        <p className="text-lg font-semibold text-plum">Your cart is ready for a little indulgence.</p>
                        <Link to="/shop" className="mt-4 inline-flex rounded-full bg-rose px-5 py-3 font-semibold text-white">Start shopping</Link>
                    </div>
                ) : (
                    cart.map((item) => (
                        <div key={item.id} className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="h-24 w-24 rounded-[20px] object-cover" />
                                <div>
                                    <p className="font-semibold text-slate-800">{item.name}</p>
                                    <p className="text-sm text-slate-500">{item.category}</p>
                                    <p className="mt-1 text-sm font-semibold text-plum">${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center rounded-full border border-slate-200 bg-mist p-1">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="rounded-full p-2"><Minus size={15} /></button>
                                    <span className="min-w-8 text-center font-semibold">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="rounded-full p-2"><Plus size={15} /></button>
                                </div>
                                <button onClick={() => updateQuantity(item.id, -999)} className="rounded-full border border-slate-200 p-2 text-slate-500"><Trash2 size={16} /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="space-y-4">
                <div className="rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                    <h2 className="font-display text-2xl text-plum">Order summary</h2>
                    <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Discount</span><span>- ${discount.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                        <div className="mt-2 flex justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-800"><span>Total</span><span>${total.toFixed(2)}</span></div>
                    </div>
                    <div className="mt-5 rounded-[20px] border border-dashed border-rose/40 bg-mist p-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2 font-semibold text-plum"><Sparkles size={15} /> Coupon code: GLAM10</div>
                        <p className="mt-1">Enjoy 10% off your first order with a refined beauty ritual.</p>
                    </div>
                    <Link to="/checkout" className="mt-5 flex w-full justify-center rounded-full bg-plum px-4 py-3 font-semibold text-white">Proceed to checkout</Link>
                </div>

                <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-rose to-plum p-6 text-white shadow-sm">
                    <h3 className="font-display text-xl">Recommended companions</h3>
                    <div className="mt-4 space-y-3">
                        {recommended.map((item) => (
                            <div key={item.id} className="flex items-center justify-between rounded-[16px] bg-white/15 px-3 py-3 backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <img src={item.image} alt={item.name} className="h-12 w-12 rounded-[12px] object-cover" />
                                    <div>
                                        <p className="text-sm font-semibold">{item.name}</p>
                                        <p className="text-xs text-white/70">Add to your ritual</p>
                                    </div>
                                </div>
                                <button onClick={() => addToCart({ ...item, category: 'Recommended', image: item.image })} className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-plum">Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
