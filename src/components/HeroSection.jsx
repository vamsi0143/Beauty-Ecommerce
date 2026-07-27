import { ArrowRight, Clock3, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-card">
            <div className="hero-copy">
                <div className="hero-chip">
                    <Sparkles size={16} /> New season, radiant glow
                </div>
                <h1>Beauty rituals crafted for midnight glamour.</h1>
                <p>Discover luxe skincare, bold makeup, sensual fragrance, and elevated essentials designed to feel as beautiful as they look.</p>
                <div className="hero-actions">
                    <Link to="/shop" className="primary-btn">Shop curated favorites <ArrowRight size={18} /></Link>
                    <Link to="/wishlist" className="secondary-btn">View wishlist</Link>
                </div>
                <div className="hero-badges">
                    <span><ShieldCheck size={15} /> Free shipping above $150</span>
                    <span><Clock3 size={15} /> 24h concierge support</span>
                </div>
            </div>

            <div className="hero-visual">
                <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80" alt="Luxury beauty products" />
                <div className="hero-overlay-card">
                    <div>
                        <p className="overlay-title">Glow quiz</p>
                        <p className="overlay-text">Find your perfect shade and ritual in minutes.</p>
                    </div>
                    <button>Start quiz</button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
