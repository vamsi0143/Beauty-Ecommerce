import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';
import './CartDrawer.css';

function CartDrawer({ isOpen, onClose, cart, updateQuantity, subtotal }) {
    if (!isOpen) return null;

    return (
        <div className="drawer-backdrop" onClick={onClose}>
            <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
                <div className="drawer-head">
                    <div className="drawer-title-wrap">
                        <ShoppingBag size={18} />
                        <h3>Mini cart</h3>
                    </div>
                    <button className="drawer-close" onClick={onClose}><X size={16} /></button>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-drawer">
                        <p>Your cart is glowing and empty.</p>
                        <Link to="/shop" onClick={onClose} className="drawer-link">Browse products</Link>
                    </div>
                ) : (
                    <>
                        <div className="drawer-items">
                            {cart.map((item) => (
                                <div key={item.id} className="drawer-item">
                                    <div>
                                        <p className="drawer-item-name">{item.name}</p>
                                        <p className="drawer-item-meta">${item.price} × {item.quantity}</p>
                                    </div>
                                    <div className="drawer-qty">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="drawer-footer">
                            <div className="drawer-total">
                                <span>Subtotal</span>
                                <strong>${subtotal.toFixed(2)}</strong>
                            </div>
                            <Link to="/cart" onClick={onClose} className="drawer-link full">View cart</Link>
                        </div>
                    </>
                )}
            </aside>
        </div>
    );
}

export default CartDrawer;
