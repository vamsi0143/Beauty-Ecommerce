const assetBase = import.meta.env.BASE_URL;
const toAssetUrl = (path) => `${assetBase}${path.replace(/^\/+/, '')}`;

export const products = [
    {
        id: 1,
        name: 'VR Luminous Dew Serum',
        category: 'Skincare',
        brand: 'VR Beauty',
        price: 72,
        originalPrice: 95,
        rating: 4.8,
        reviews: 124,
        badge: 'Best Seller',
        skinType: ['Dry', 'Sensitive'],
        description: 'A luminous glow-boosting serum infused with niacinamide and fermented botanicals for a radiant, satin finish.',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop'
        ],
        shades: ['Rose Quartz', 'Honey Glow'],
        ingredients: 'Niacinamide, Peony Extract, Hyaluronic Acid',
        tags: ['Glow', 'Hydration']
    },

    {
        id: 2,
        name: 'Luna Velvet Rouge',
        category: 'Makeup',
        brand: 'Luna',
        price: 38,
        originalPrice: 48,
        rating: 4.6,
        reviews: 86,
        badge: 'New',
        skinType: ['All', 'Sensitive'],
        description: 'A weightless satin rouge with a plush, comfortable finish and a softly sculpted look.',
        image: 'https://images.unsplash.com/photo-1583241800698-9d86b6d5f7dd?w=800&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1583241800698-9d86b6d5f7dd?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop'
        ],
        shades: ['Mauve', 'Nude', 'Berry'],
        ingredients: 'Shea Butter, Vitamin E, Jojoba Oil',
        tags: ['Soft Matte']
    },

    {
        id: 3,
        name: 'Silk Velvet Repair Shampoo',
        category: 'Haircare',
        brand: 'Silk',
        price: 29,
        originalPrice: 36,
        rating: 4.7,
        reviews: 65,
        badge: 'Trending',
        skinType: ['All'],
        description: 'A strengthening shampoo that smooths, protects, and leaves every strand silky and luminous.',
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop'
        ],
        shades: ['Classic'],
        ingredients: 'Keratin, Argan Oil, Aloe Vera',
        tags: ['Repair', 'Shine']
    },

    {
        id: 4,
        name: 'Éclat Noir Velvet Elixir',
        category: 'Fragrances',
        brand: 'Éclat',
        price: 94,
        originalPrice: 118,
        rating: 4.9,
        reviews: 92,
        badge: 'Limited',
        skinType: ['All'],
        description: 'An opulent floral musk layered with cedar, neroli, and soft amber for a quietly commanding signature.',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583241800698-9d86b6d5f7dd?w=800&auto=format&fit=crop'
        ],
        shades: ['50ml', '100ml'],
        ingredients: 'Neroli, Cedarwood, Amber',
        tags: ['Floral', 'Luxury']
    },

    {
        id: 5,
        name: 'Mellow Velvet Body Cream',
        category: 'Body Care',
        brand: 'Mellow',
        price: 24,
        originalPrice: 32,
        rating: 4.5,
        reviews: 71,
        badge: 'Seasonal',
        skinType: ['Dry', 'Normal'],
        description: 'A velvety cocoa butter cream that melts into lasting hydration and a satin-soft finish.',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583241800698-9d86b6d5f7dd?w=800&auto=format&fit=crop'
        ],
        shades: ['Cocoa', 'Vanilla'],
        ingredients: 'Cocoa Butter, Oat Milk, Vitamin E',
        tags: ['Hydration', 'Nourishing']
    },

    {
        id: 6,
        name: 'Aura Atelier Brush Set',
        category: 'Beauty Accessories',
        brand: 'Aura',
        price: 56,
        originalPrice: 70,
        rating: 4.8,
        reviews: 58,
        badge: 'Editors Pick',
        skinType: ['All'],
        description: 'A luxe brush collection crafted for seamless blending, sculpted precision, and polished artistry.',
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583241800698-9d86b6d5f7dd?w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop'
        ],
        shades: ['Rose', 'Gold'],
        ingredients: 'Synthetic Taklon Bristles',
        tags: ['Makeup', 'Tools']
    }
];

export const categories = [
    'Skincare',
    'Makeup',
    'Haircare',
    'Fragrances',
    'Body Care',
    'Beauty Accessories'
];

export const brands = [
    'VR Beauty',
    'Luna',
    'Silk',
    'Éclat',
    'Mellow',
    'Aura'
];

export const skinTypes = [
    'Dry',
    'Normal',
    'Oily',
    'Sensitive',
    'All'
];
