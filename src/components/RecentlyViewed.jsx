import { Link } from 'react-router-dom';
import './RecentlyViewed.css';

function RecentlyViewed({ products, onSelect }) {
    return (
        <section className="recent-section">
            <div className="section-title-row">
                <div>
                    <p className="panel-eyebrow">Recently viewed</p>
                    <h3>Picked back up for you</h3>
                </div>
            </div>
            <div className="recent-grid">
                {products.map((product) => (
                    <div key={product.id} className="recent-card">
                        <img src={product.image} alt={product.name} />
                        <div>
                            <p className="recent-name">{product.name}</p>
                            <p className="recent-meta">{product.category}</p>
                        </div>
                        <div className="recent-actions">
                            <Link to={`/product/${product.id}`} className="recent-link">View</Link>
                            <button onClick={() => onSelect(product)}>Compare</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default RecentlyViewed;
