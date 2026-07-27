/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                blush: '#f7d7d3',
                rose: '#b96b6b',
                plum: '#4b2e4f',
                mist: '#f6f0ee',
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                luxury: '0 20px 45px -20px rgba(75, 46, 79, 0.4)',
            },
        },
    },
    plugins: [],
};
