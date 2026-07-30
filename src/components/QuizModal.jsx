import { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import './QuizModal.css';

function QuizModal({ isOpen, onClose, onRecommend }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});

    if (!isOpen) return null;

    const questions = [
        { q: 'What do you want most from your routine?', options: ['Glow', 'Hydration', 'Long wear', 'Calm care'] },
        { q: 'Which finish feels best on you?', options: ['Dewy', 'Velvety', 'Satin', 'Natural'] },
        { q: 'How do you want to feel?', options: ['Confident', 'Rested', 'Radiant', 'Pampered'] }
    ];

    const next = () => {
        if (step < questions.length - 1) setStep(step + 1);
        else {
            const result = answers[step] || questions[questions.length - 1].options[0];
            const recommended = result === 'Glow' ? 'VR Dew Serum' : result === 'Hydration' ? 'Mellow Body Cream' : result === 'Long wear' ? 'Luna Velvet Lip' : 'Silk Restore Shampoo';
            onRecommend(recommended);
            onClose();
        }
    };

    const selectOption = (option) => {
        setAnswers((prev) => ({ ...prev, [step]: option }));
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={16} />
                </button>
                <div className="quiz-head">
                    <div className="quiz-icon"><Sparkles size={18} /></div>
                    <div>
                        <p className="panel-eyebrow">Beauty quiz</p>
                        <h3>Find your perfect ritual</h3>
                    </div>
                </div>
                <p className="quiz-question">{questions[step].q}</p>
                <div className="quiz-options">
                    {questions[step].options.map((option) => (
                        <button key={option} className={`option-pill ${answers[step] === option ? 'active' : ''}`} onClick={() => selectOption(option)}>{option}</button>
                    ))}
                </div>
                <button className="quiz-next" onClick={next}>{step < questions.length - 1 ? 'Next' : 'Reveal result'}</button>
            </div>
        </div>
    );
}

export default QuizModal;
