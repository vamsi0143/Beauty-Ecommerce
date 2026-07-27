import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';
import FeatureStrip from '../components/FeatureStrip';
import SectionTitle from '../components/SectionTitle';
import CategoryPill from '../components/CategoryPill';
import RecentlyViewed from '../components/RecentlyViewed';
import ComparisonPanel from '../components/ComparisonPanel';
import './HomePage.css';

function HomePage({ products, featuredProducts, addToCart, addToWishlist }) {
    const categories = ['Skincare', 'Makeup', 'Haircare', 'Fragrances', 'Body Care', 'Accessories'];
    const [selectedCompare, setSelectedCompare] = useState([]);
    const recentlyViewed = products.slice(0, 3);

    return (
        <div className="home-page">
            <HeroSection />
            <FeatureStrip />

            <section className="content-section">
                <SectionTitle eyebrow="Featured picks" title="Our elevated essentials" action={<Link to="/shop" className="section-link">Explore all <ArrowRight size={16} /></Link>} />
                <div className="product-grid">
                    {featuredProducts.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />)}
                </div>
            </section>

            <section className="content-section split-grid">
                <div className="panel-card">
                    <SectionTitle eyebrow="Categories" title="Curated by ritual" />
                    <div className="category-grid">
                        {categories.map((category) => <CategoryPill key={category} label={category} />)}
                    </div>
                </div>
                <div className="panel-card quiz-card">
                    <p className="panel-eyebrow">Beauty quiz</p>
                    <h3>Find your glow profile</h3>
                    <p>Answer a few quick questions and receive a personalized routine matched to your skin type and aesthetic.</p>
                    <button>Start the quiz</button>
                </div>
            </section>

            <section className="content-section">
                <SectionTitle eyebrow="Trending now" title="Fresh arrivals + best sellers" />
                <div className="product-grid">
                    {products.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} compact />)}
                </div>
            </section>

            <RecentlyViewed products={recentlyViewed} onSelect={(product) => setSelectedCompare((prev) => (prev.some((item) => item.id === product.id) ? prev : [...prev, product].slice(-2)))} />
            <ComparisonPanel selectedProducts={selectedCompare} />

            <section className="newsletter-card">
                <div>
                    <p className="panel-eyebrow">Newsletter</p>
                    <h3>Join the velvet glow club</h3>
                </div>
                <div className="newsletter-form">
                    <input placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
