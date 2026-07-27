import { useState } from 'react';
import { CheckCircle2, CreditCard, Truck, Gift } from 'lucide-react';

function CheckoutPage({ cart, subtotal, discount, shipping, total }) {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', address: '', note: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.address) {
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="rounded-[32px] border border-slate-200 bg-white/80 p-8 text-center shadow-sm">
                <CheckCircle2 size={48} className="mx-auto text-rose" />
                <h1 className="mt-4 font-display text-3xl text-plum">Order confirmed</h1>
                <p className="mx-auto mt-3 max-w-xl text-slate-600">Your glamorous package is being prepared and will reach you in 2–4 business days. A confirmation email has been sent to {form.email}.</p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <form onSubmit={handleSubmit} className="space-y-4 rounded-[30px] border border-slate-200 bg-white/90 p-6 text-slate-900 shadow-sm">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose">Checkout</p>
                    <h1 className="font-display text-3xl text-plum">Your details</h1>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Full name" />
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Email" />
                </div>
                <textarea required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="min-h-[110px] w-full rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Shipping address" />
                <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} className="min-h-[90px] w-full rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Delivery notes" />

                <div className="rounded-[24px] border border-slate-200 p-4">
                    <p className="mb-3 text-sm font-semibold text-slate-600">Delivery options</p>
                    <div className="flex flex-wrap gap-3">
                        <label className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm"><Truck size={15} /> Express ($14)</label>
                        <label className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm"><Gift size={15} /> Gift wrap ($8)</label>
                    </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 p-4">
                    <p className="mb-3 text-sm font-semibold text-slate-600">Payment method</p>
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-mist px-4 py-3 text-sm font-medium"><CreditCard size={16} /> Credit / debit card</div>
                </div>

                <button type="submit" className="w-full rounded-full bg-plum px-4 py-3 font-semibold text-white">Place order</button>
            </form>

            <div className="rounded-[30px] border border-slate-200 bg-white/80 p-6 shadow-sm">
                <h2 className="font-display text-2xl text-plum">Order summary</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                    {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between rounded-[16px] border border-slate-200 px-3 py-3">
                            <span>{item.name} × {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600">
                    <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Discount</span><span>- ${discount.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
                    <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-800"><span>Total</span><span>${total.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
