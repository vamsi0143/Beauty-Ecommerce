import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import './ProductCard.css';

function ProductCard({ product, addToCart, addToWishlist, compact = false }) {
    return (
        <article className="product-card">
            <div className="product-media">
                <img src={product.image} alt={product.name} className={compact ? 'product-image compact' : 'product-image'} />
                <span className="product-badge">{product.badge}</span>
                <button onClick={() => addToWishlist(product)} className="wishlist-icon" aria-label="Add to wishlist">
                    <Heart size={16} />
                </button>
            </div>
            <div className="product-body">
                <div className="product-top">
                    <div>
                        <p className="product-category">{product.category}</p>
                        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
                        <p className="product-description">{product.description}</p>
                    </div>
                    <div className="product-price">${product.price}</div>
                </div>
                <div className="product-footer">
                    <div className="rating-row">
                        <Star size={14} fill="currentColor" />
                        <span>{product.rating}</span>
                        <span>({product.reviews})</span>
                    </div>
                    <button onClick={() => addToCart(product)} className="add-btn">
                        <ShoppingBag size={14} /> Add
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
