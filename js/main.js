// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Category Filter
const categoryButtons = document.querySelectorAll('.category-btn');
const articleCards = document.querySelectorAll('.article-card');
const articlesGrid = document.getElementById('articlesGrid');

let currentCategory = 'all';
let currentSearch = '';

// Only setup category filtering if category buttons exist
if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get selected category
            currentCategory = button.getAttribute('data-category');
            
            // Clear search if category is changed
            if (currentSearch) {
                currentSearch = '';
                const searchInput = document.getElementById('searchInput');
                const mobileSearchInput = document.getElementById('mobileSearchInput');
                const searchResults = document.getElementById('searchResults');
                if (searchInput) searchInput.value = '';
                if (mobileSearchInput) mobileSearchInput.value = '';
                if (searchResults) searchResults.classList.add('hidden');
            }
            
            // Filter articles
            filterArticles();
        });
    });
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsText = document.getElementById('searchResultsText');
const clearSearchBtn = document.getElementById('clearSearch');

// Debounce function for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleSearch(query) {
    currentSearch = query.toLowerCase().trim();
    
    if (currentSearch) {
        // Reset category filter
        currentCategory = 'all';
        categoryButtons.forEach(btn => {
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Filter articles
        const visibleCount = filterArticles();
        
        // Show search results
        searchResults.classList.remove('hidden');
        searchResultsText.textContent = `Found ${visibleCount} article${visibleCount !== 1 ? 's' : ''} for "${query}"`;
    } else {
        clearSearch();
    }
}

function clearSearch() {
    currentSearch = '';
    if (searchInput) searchInput.value = '';
    if (mobileSearchInput) mobileSearchInput.value = '';
    if (searchResults) searchResults.classList.add('hidden');
    filterArticles();
}

// Debounced search for real-time search
const debouncedSearch = debounce((query) => {
    handleSearch(query);
}, 300);

// Desktop search - Enter key and real-time search
if (searchInput) {
    // Enter key search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(searchInput.value);
        }
    });
    
    // Real-time search as user types
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            debouncedSearch(query);
        } else {
            clearSearch();
        }
    });
}

// Mobile search - Enter key and real-time search
if (mobileSearchInput) {
    // Enter key search
    mobileSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(mobileSearchInput.value);
            // Close mobile menu
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (mobileMenu) mobileMenu.classList.remove('active');
        }
    });
    
    // Real-time search as user types
    mobileSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            debouncedSearch(query);
        } else {
            clearSearch();
        }
    });
}

// Clear search button
if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
}

// Filter Articles Function
function filterArticles() {
    // Check if we're on a page with articles
    if (!articleCards || articleCards.length === 0) {
        return 0;
    }
    
    let visibleCount = 0;
    
    articleCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const titleElement = card.querySelector('.article-title');
        const excerptElement = card.querySelector('.article-excerpt');
        const categoryElement = card.querySelector('.article-category');
        
        // Safety checks
        if (!titleElement || !excerptElement || !categoryElement) {
            return;
        }
        
        const title = titleElement.textContent.toLowerCase();
        const excerpt = excerptElement.textContent.toLowerCase();
        const categoryName = categoryElement.textContent.toLowerCase();
        
        let showCard = true;
        
        // Category filter
        if (currentCategory !== 'all' && category !== currentCategory) {
            showCard = false;
        }
        
        // Search filter
        if (currentSearch) {
            const matchesSearch = title.includes(currentSearch) || 
                                excerpt.includes(currentSearch) || 
                                categoryName.includes(currentSearch);
            if (!matchesSearch) {
                showCard = false;
            }
        }
        
        if (showCard) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Handle no results (only if articlesGrid exists)
    if (articlesGrid) {
        const noResults = document.getElementById('noResults');
        if (visibleCount === 0) {
            if (!noResults) {
                const noResultsDiv = document.createElement('div');
                noResultsDiv.id = 'noResults';
                noResultsDiv.className = 'no-results';
                noResultsDiv.innerHTML = '<p style="text-align: center; color: var(--color-gray-500); padding: 4rem 0; font-size: 1.25rem;">No articles found. Try a different search or category.</p>';
                articlesGrid.appendChild(noResultsDiv);
            }
        } else {
            if (noResults) {
                noResults.remove();
            }
        }
    }
    
    return visibleCount;
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all article cards
articleCards.forEach(card => {
    observer.observe(card);
});

