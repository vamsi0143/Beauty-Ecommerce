import { useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from './data/products';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import QuizModal from './components/QuizModal';
import CartDrawer from './components/CartDrawer';
import ThemeToggle from './components/ThemeToggle';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

function App() {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [toast, setToast] = useState('');
    const [quizOpen, setQuizOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [theme, setTheme] = useState('dark');
    const location = useLocation();

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = wishlist.length;

    useEffect(() => {
        const timer = setTimeout(() => setToast(''), 2200);
        return () => clearTimeout(timer);
    }, [toast]);

    const addToCart = (product, quantity = 1) => {
        setCart((prev) => {
            const found = prev.find((item) => item.id === product.id);
            if (found) {
                return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
            }
            return [...prev, { ...product, quantity }];
        });
        setToast(`${product.name} added to cart`);
    };

    const addToWishlist = (product) => {
        setWishlist((prev) => (prev.some((item) => item.id === product.id) ? prev : [...prev, product]));
        setToast(`${product.name} saved to wishlist`);
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCart((prev) => prev.flatMap((item) => (item.id === id ? (item.quantity + delta > 0 ? [{ ...item, quantity: item.quantity + delta }] : []) : [item])));
    };

    const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
    const discount = subtotal > 180 ? 26 : 0;
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal - discount + shipping;

    const featuredProducts = products.slice(0, 3);

    return (
        <div className={`app-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
            <div className="theme-switcher">
                <ThemeToggle isDark={theme === 'dark'} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </div>
            <Header cartCount={cartCount} wishlistCount={wishlistCount} onOpenQuiz={() => setQuizOpen(true)} onOpenCart={() => setDrawerOpen(true)} />

            <main className="main-content">
                <AnimatePresence mode="wait">
                    <motion.div key={location.pathname} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.28 }}>
                        <Routes>
                            <Route path="/" element={<HomePage products={products} featuredProducts={featuredProducts} addToCart={addToCart} addToWishlist={addToWishlist} />} />
                            <Route path="/shop" element={<ProductListingPage products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
                            <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} addToWishlist={addToWishlist} />} />
                            <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} subtotal={subtotal} discount={discount} shipping={shipping} total={total} addToCart={addToCart} />} />
                            <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} addToCart={addToCart} removeFromWishlist={removeFromWishlist} />} />
                            <Route path="/checkout" element={<CheckoutPage cart={cart} subtotal={subtotal} discount={discount} shipping={shipping} total={total} />} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="footer">
                <div className="footer-inner">
                    <div>
                        <p className="footer-title">VR Beauty</p>
                        <p className="footer-copy">Crafted for glow, comfort, and elevated rituals with visionary beauty essentials.</p>
                    </div>
                    <div className="footer-meta">
                        <span><ShieldCheck size={15} /> Secure checkout</span>
                        <span><Truck size={15} /> Fast delivery</span>
                        <span><RotateCcw size={15} /> Easy returns</span>
                    </div>
                </div>
            </footer>

            <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} onRecommend={(recommendation) => setToast(`We suggest ${recommendation}`)} />
            <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} cart={cart} updateQuantity={updateQuantity} subtotal={subtotal} />
            {toast && <div className="toast">{toast}</div>}
        </div>
    );
}

export default App;
