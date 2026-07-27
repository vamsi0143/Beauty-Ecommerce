import './FeatureStrip.css';

function FeatureStrip() {
    const items = [
        { title: 'Limited glow drops', text: 'Save up to 30% on our new edit.' },
        { title: 'Complimentary minis', text: 'Travel-size samples with every ritual.' },
        { title: 'Priority access', text: 'Be first to shop the next release.' }
    ];

    return (
        <section className="feature-strip">
            {items.map((item) => (
                <div key={item.title} className="feature-card">
                    <p className="feature-title">{item.title}</p>
                    <p className="feature-text">{item.text}</p>
                </div>
            ))}
        </section>
    );
}

export default FeatureStrip;
