import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

function ThemeToggle({ isDark, onToggle }) {
    return (
        <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}

export default ThemeToggle;
