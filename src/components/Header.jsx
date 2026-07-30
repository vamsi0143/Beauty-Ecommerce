import { Link, NavLink } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingBag, Sparkles, X, Sparkles as QuizIcon } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

function Header({ cartCount, wishlistCount, onOpenQuiz, onOpenCart }) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <header className="topbar">
            <div className="topbar-inner">
                <Link to="/" className="brand-wrap">
                    <div className="brand-mark">
                        <Sparkles size={16} />
                    </div>
                    <div>
                        <p className="brand-name">VR Beauty</p>
                        <p className="brand-subtitle">Luxury essentials</p>
                    </div>
                </Link>

                <nav className="nav-links">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Shop</NavLink>
                    <NavLink to="/wishlist" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Wishlist</NavLink>
                    <NavLink to="/checkout" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Checkout</NavLink>
                </nav>

                <div className="header-actions">
                    <Link to="/shop" className="icon-btn desktop-only">
                        <Search size={18} />
                    </Link>
                    <Link to="/wishlist" className="icon-btn">
                        <Heart size={18} />
                        {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
                    </Link>
                    <button type="button" className="icon-btn" onClick={onOpenQuiz}>
                        <QuizIcon size={18} />
                    </button>
                    <button type="button" className="icon-btn" onClick={onOpenCart}>
                        <ShoppingBag size={18} />
                        {cartCount > 0 && <span className="badge">{cartCount}</span>}
                    </button>
                    <button className="icon-btn mobile-only" onClick={() => setMobileNavOpen((prev) => !prev)}>
                        {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {mobileNavOpen && (
                <div className="mobile-nav">
                    <NavLink to="/" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>Home</NavLink>
                    <NavLink to="/shop" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>Shop</NavLink>
                    <NavLink to="/wishlist" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>Wishlist</NavLink>
                    <NavLink to="/checkout" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}>Checkout</NavLink>
                </div>
            )}
        </header>
    );
}

export default Header;
