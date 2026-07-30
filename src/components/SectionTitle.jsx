function SectionTitle({ eyebrow, title, action }) {
    return (
        <div className="section-title">
            <div>
                <p className="section-eyebrow">{eyebrow}</p>
                <h2>{title}</h2>
            </div>
            {action}
        </div>
    );
}

export default SectionTitle;
