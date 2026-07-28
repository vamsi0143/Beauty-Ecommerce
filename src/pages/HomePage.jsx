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
    const newArrivals = products.slice(0, 2);
    const trendingNow = products.slice(3, 6);
    const promoBanners = [
        {
            title: 'Glow reset ritual',
            text: 'Layer hydration and luminosity with our most-loved evening essentials.',
            accent: 'Soft Radiance',
        },
        {
            title: 'Limited edit',
            text: 'Discover elevated fragrance and body care crafted for a lasting impression.',
            accent: 'Velvet Luxe',
        },
    ];
    const reviews = [
        {
            name: 'Maya R.',
            role: 'Glow seeker',
            quote: 'The textures are incredible and the routine feels luxurious from the first step.',
        },
        {
            name: 'Nina S.',
            role: 'Beauty editor',
            quote: 'Every product feels polished and intentional. The site experience is just as elevated.',
        },
        {
            name: 'Sofia T.',
            role: 'Repeat shopper',
            quote: 'My cart is always full because the curation feels personal and beautifully curated.',
        },
    ];

    return (
        <div className="home-page">
            <HeroSection />
            <FeatureStrip />

            <section className="content-section">
                <SectionTitle eyebrow="Best sellers" title="Our most loved rituals" action={<Link to="/shop" className="section-link">Explore all <ArrowRight size={16} /></Link>} />
                <div className="product-grid">
                    {featuredProducts.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} />)}
                </div>
            </section>

            <section className="content-section new-arrivals-section">
                <div className="new-arrivals-copy">
                    <p className="panel-eyebrow">New arrivals</p>
                    <h3>Fresh from our latest edit</h3>
                    <p>Discover texture-rich essentials designed to turn every ritual into a soft-glow moment.</p>
                    <Link to="/shop" className="section-link">See what is new <ArrowRight size={16} /></Link>
                </div>
                <div className="new-arrivals-grid">
                    {newArrivals.map((product) => (
                        <article key={product.id} className="promo-card">
                            <img src={product.image} alt={product.name} />
                            <div>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="content-section split-grid">
                <div className="panel-card">
                    <SectionTitle eyebrow="Beauty categories" title="Curated by ritual" />
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

            <section className="content-section promo-banner-list">
                {promoBanners.map((banner) => (
                    <div key={banner.title} className="promo-banner">
                        <p className="panel-eyebrow">Promotional banner</p>
                        <h3>{banner.title}</h3>
                        <p>{banner.text}</p>
                        <span>{banner.accent}</span>
                    </div>
                ))}
            </section>

            <section className="content-section">
                <SectionTitle eyebrow="Trending now" title="Fresh arrivals + best sellers" />
                <div className="product-grid">
                    {trendingNow.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} addToWishlist={addToWishlist} compact />)}
                </div>
            </section>

            <section className="content-section reviews-section">
                <SectionTitle eyebrow="Customer reviews" title="Loved by glow seekers" />
                <div className="review-grid">
                    {reviews.map((review) => (
                        <article key={review.name} className="review-card">
                            <div className="stars">★★★★★</div>
                            <p>“{review.quote}”</p>
                            <h4>{review.name}</h4>
                            <span>{review.role}</span>
                        </article>
                    ))}
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
