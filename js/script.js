// A.ATIF TECH - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeWhatsAppLinks();
    loadProducts();
    loadFeatures();
    loadSocialLinks();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializeScrollToTop();
});

// Initialize WhatsApp Links
function initializeWhatsAppLinks() {
    // Hero WhatsApp Button
    const heroWhatsappBtn = document.getElementById('heroWhatsappBtn');
    if (heroWhatsappBtn) {
        heroWhatsappBtn.href = getWhatsAppLink('general');
    }
    
    // Dealer Price Button
    const dealerPriceBtn = document.getElementById('dealerPriceBtn');
    if (dealerPriceBtn) {
        dealerPriceBtn.href = getWhatsAppLink('dealerPrice');
    }
    
    // Contact WhatsApp Link
    const contactWhatsappLink = document.getElementById('contactWhatsappLink');
    if (contactWhatsappLink) {
        contactWhatsappLink.href = getWhatsAppLink('general');
        contactWhatsappLink.textContent = config.displayPhone;
    }
    
    // Contact Message Button
    const contactMessageBtn = document.getElementById('contactMessageBtn');
    if (contactMessageBtn) {
        contactMessageBtn.href = getWhatsAppLink('contact');
    }
    
    // Google Maps Link
    const googleMapsLink = document.getElementById('googleMapsLink');
    if (googleMapsLink) {
        googleMapsLink.href = config.socialMedia.googleMaps;
    }
}

// Load Products dynamically
function loadProducts() {    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid || !config.products) return;
    
    productsGrid.innerHTML = config.products.map(product => {
        const messageKey = product.messageKey || 'general';
        const buttonText = product.buttonText || 'Inquiry Now';
        
        return `
            <div class="product-card">
                <div class="product-icon">
                    <i class="fas ${product.icon}"></i>
                </div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="product-tag">${product.tag}</span>
                <a href="${getWhatsAppLink(messageKey)}" class="inquiry-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> ${buttonText}
                </a>
            </div>
        `;
    }).join('');
}

// Load Features dynamically
function loadFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid || !config.features) return;
    
    featuresGrid.innerHTML = config.features.map(feature => {
        return `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas ${feature.icon}"></i>
                </div>
                <div class="feature-content">
                    <h3>${feature.title}</h3>
                    <p>${feature.description}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Load Social Media Links
function loadSocialLinks() {
    const socialLinksContainer = document.getElementById('socialLinks');
    const footerSocialLinksContainer = document.getElementById('footerSocialLinks');
    
    const socialPlatforms = [
        { key: 'instagram', icon: 'fa-instagram', class: 'instagram', title: 'Instagram' },        { key: 'facebook', icon: 'fa-facebook-f', class: 'facebook', title: 'Facebook' },
        { key: 'tiktok', icon: 'fa-tiktok', class: 'tiktok', title: 'TikTok' },
        { key: 'whatsapp', icon: 'fa-whatsapp', class: 'whatsapp', title: 'WhatsApp' }
    ];
    
    const createSocialLinks = () => {
        return socialPlatforms.map(platform => {
            const url = config.socialMedia[platform.key];
            return `
                <a href="${url}" target="_blank" class="${platform.class}" title="${platform.title}">
                    <i class="fab ${platform.icon}"></i>
                </a>
            `;
        }).join('');
    };
    
    if (socialLinksContainer) {
        socialLinksContainer.innerHTML = createSocialLinks();
    }
    
    if (footerSocialLinksContainer) {
        footerSocialLinksContainer.innerHTML = createSocialLinks();
    }
}

// Initialize Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards and feature cards
    document.querySelectorAll('.product-card, .feature-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}
// Initialize Mobile Menu
function initializeMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileMenu || !navLinks) return;
    
    mobileMenu.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--dark-bg)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
            navLinks.style.zIndex = '999';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
}

// Initialize Scroll to Top Button
function initializeScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
