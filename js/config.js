// A.ATIF TECH - Configuration File
// All links, phone numbers, and social media URLs

const config = {
    // Contact Information
    phoneNumber: '601163945396', // WhatsApp number without + or spaces
    displayPhone: '+60 11-6394 5396',
    email: 'contact@aatiftech.com',
    location: 'Level 3, Plaza Low Yat, Bukit Bintang, Kuala Lumpur',
    
    // Social Media Links
    socialMedia: {
        whatsapp: 'https://wa.me/601163945396',
        instagram: 'https://www.instagram.com/a.atif_tech?igsh=MWd2a2w3eXpjMDZzcw==',
        facebook: 'https://www.facebook.com/search/top?q=A.ATIF%20TECH',
        tiktok: 'https://www.tiktok.com/@a.atiftech', // Update with actual username
        googleMaps: 'https://maps.google.com/?q=Plaza+Low+Yat,+Level+3,+Bukit+Bintang,+Kuala+Lumpur'
    },
    
    // WhatsApp Pre-filled Messages
    whatsappMessages: {
        general: 'Hi A.ATIF TECH! I would like to inquire about your products.',
        laptop: "Hi! I'm interested in Laptops. Please share available models and prices.",
        desktop: "Hi! I'm interested in Desktop Computers. Please share details.",
        monitor: "Hi! I'm interested in Monitors. Please share available options.",
        keyboard: "Hi! I'm interested in Keyboards. Please share details.",
        mouse: "Hi! I'm interested in Mouse. Please share available options.",
        iphone: "Hi! I'm interested in iPhones. Please share available models and prices.",
        android: "Hi! I'm interested in Android Phones. Please share details.",
        repair: 'Hi! I need repair service for my device. Please advise.',
        dealerPrice: 'Hi! I saw your Dealer Price offer. I\'d like to know more.',
        contact: 'Hi A.ATIF TECH! I visited your website and would like to connect.'
    },
    
    // Products Data
    products: [
        {
            id: 1,
            name: 'Laptop',
            icon: 'fa-laptop',
            description: 'New and used laptops from top brands. Fully tested and ready to use.',
            tag: 'New / Used',
            messageKey: 'laptop'
        },
        {
            id: 2,
            name: 'Desktop',
            icon: 'fa-desktop',
            description: 'Powerful desktop computers for work, gaming, and professional use.',
            tag: 'New / Secondhand',            messageKey: 'desktop'
        },
        {
            id: 3,
            name: 'Monitor',
            icon: 'fa-tv',
            description: 'High-quality displays in various sizes for all your viewing needs.',
            tag: 'New / Secondhand',
            messageKey: 'monitor'
        },
        {
            id: 4,
            name: 'Keyboard',
            icon: 'fa-keyboard',
            description: 'Mechanical and membrane keyboards for gaming and productivity.',
            tag: 'New (Box) / Used',
            messageKey: 'keyboard'
        },
        {
            id: 5,
            name: 'Mouse',
            icon: 'fa-mouse',
            description: 'Precision mice for gaming, work, and everyday use.',
            tag: 'New (Box) / Used',
            messageKey: 'mouse'
        },
        {
            id: 6,
            name: 'iPhone',
            icon: 'fa-apple',
            description: 'Pre-owned iPhones in excellent condition. All models available.',
            tag: 'Secondhand',
            messageKey: 'iphone'
        },
        {
            id: 7,
            name: 'Android Phone',
            icon: 'fa-android',
            description: 'Wide selection of Android smartphones from popular brands.',
            tag: 'New / Used',
            messageKey: 'android'
        },
        {
            id: 8,
            name: 'Repair Service',
            icon: 'fa-tools',
            description: 'Professional repair services for all your electronic devices.',
            tag: 'Expert Service',
            messageKey: 'repair',
            buttonText: 'Book Service'        }
    ],
    
    // Features Data
    features: [
        {
            icon: 'fa-check-circle',
            title: 'Quality Assured',
            description: 'Fully checked and well-conditioned products. Every device undergoes rigorous testing before sale.'
        },
        {
            icon: 'fa-shield-alt',
            title: 'Warranty Available',
            description: '1 to 3 years warranty available on selected products for your peace of mind.'
        },
        {
            icon: 'fa-dollar-sign',
            title: 'Fair Pricing',
            description: 'Fair & competitive pricing. We offer dealer prices to give you the best value.'
        },
        {
            icon: 'fa-handshake',
            title: 'Trusted Transactions',
            description: 'Trusted and transparent transactions. We believe in honest business practices.'
        },
        {
            icon: 'fa-headset',
            title: 'After-Sales Support',
            description: 'Reliable after-sales support. We\'re here to help even after your purchase.'
        },
        {
            icon: 'fa-exchange-alt',
            title: 'Buy & Sell',
            description: 'We both buy and sell devices. Get the best value for your old electronics.'
        }
    ]
};

// Helper function to create WhatsApp link with message
function getWhatsAppLink(messageKey = 'general') {
    const message = encodeURIComponent(config.whatsappMessages[messageKey] || config.whatsappMessages.general);
    return `https://wa.me/${config.phoneNumber}?text=${message}`;
}
