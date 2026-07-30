import './ComparisonPanel.css';

function ComparisonPanel({ selectedProducts }) {
    if (!selectedProducts.length) return null;

    return (
        <section className="compare-panel">
            <div className="section-title-row">
                <div>
                    <p className="panel-eyebrow">Product comparison</p>
                    <h3>Compare your favorites</h3>
                </div>
            </div>
            <div className="compare-grid">
                {selectedProducts.map((product) => (
                    <div key={product.id} className="compare-card">
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>{product.category}</p>
                        <span>${product.price}</span>
                        <small>{product.rating} ★</small>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ComparisonPanel;
