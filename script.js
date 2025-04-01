// Tech Mafia Website JavaScript - Compressed but readable version
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    
    // Helper functions
    const resetAnimation = (el, newAnimation, delay = 0) => {
        el.style.animation = 'none';
        setTimeout(() => el.style.animation = newAnimation, delay);
    };
    
    const setTabState = (tab, isActive, location) => {
        if (location === 'tabbar') {
            tab.classList[isActive ? 'add' : 'remove']('border-primary', 'text-primary');
            tab.classList[!isActive ? 'add' : 'remove']('border-transparent', 'text-gray-500');
        } else if (location === 'header') {
            tab.classList[isActive ? 'add' : 'remove']('text-primary');
        } else if (location === 'footer') {
            tab.classList[isActive ? 'add' : 'remove']('text-primary');
            tab.classList[!isActive ? 'add' : 'remove']('text-gray-300');
        }
    };
    
    // Initialize tech icons animations
    const techIcons = document.querySelectorAll('.dancing-icon');
    techIcons.forEach((icon, i) => {
        // Different animation delay for mobile icons vs regular icons
        const isMobile = icon.classList.contains('mobile-icon');
        icon.style.animationDelay = `${i * (isMobile ? 0.2 : 0.4)}s`;
        
        // Add hover effects
        icon.addEventListener('mouseenter', () => {
            icon.style.animationName = 'float';
            icon.style.animationDuration = '1.5s';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.animationName = 'none';
            setTimeout(() => {
                icon.style.animationName = 'shake';
                icon.style.animationDuration = isMobile ? '2s' : '3s';
            }, 50);
        });
        
        // Add touch interaction for mobile devices
        if (isMobile) {
            icon.addEventListener('touchstart', (e) => {
                e.preventDefault(); // Prevent default touch behavior
                icon.style.animationName = 'float';
                icon.style.animationDuration = '1.5s';
                
                // Add a random movement on touch
                const randomX = (Math.random() - 0.5) * 10;
                const randomY = (Math.random() - 0.5) * 10;
                icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
                
                setTimeout(() => {
                    icon.style.transform = '';
                }, 500);
            });
            
            icon.addEventListener('touchend', () => {
                setTimeout(() => {
                    icon.style.animationName = 'shake';
                    icon.style.animationDuration = '2s';
                }, 300);
            });
        }
    });
    
    // Set row animation speeds
    const techIconRows = document.querySelectorAll('.tech-icons-row');
    techIconRows.forEach((row, i) => {
        row.style.animationDuration = `${35 - (i * 5)}s`;
    });
    
    // Tab switching functionality
    const switchToTab = (tabId) => {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Reset animations
        techIcons.forEach((icon, i) => {
            resetAnimation(icon, `shake 3s ease-in-out infinite ${i * 0.4}s`, 10);
        });
        
        techIconRows.forEach((row, i) => {
            resetAnimation(row, `scrollLeftToRight ${35 - (i * 5)}s linear infinite`, 10);
        });
        
        // Update tab states
        const tabLinks = document.querySelectorAll('.tab-link');
        tabLinks.forEach(tab => {
            const isTabBar = tab.classList.contains('inline-block');
            const isHeader = tab.closest('header');
            const isFooter = tab.closest('footer');
            const location = isTabBar ? 'tabbar' : (isHeader ? 'header' : (isFooter ? 'footer' : null));
            
            if (location) {
                const tabHref = tab.getAttribute('href');
                const tabDataTab = tab.getAttribute('data-tab');
                const isActive = (tabHref === `#${tabId}` || tabDataTab === tabId);
                setTabState(tab, isActive, location);
            }
        });
        
        // Update content visibility
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const tabContent = document.getElementById(tabId);
        if (tabContent) {
            tabContent.classList.add('active');
        } else {
            console.error(`Tab content not found: ${tabId}`);
        }
    };
    
    // Initialize navigation
    document.querySelectorAll('header nav a, .grid a, footer a').forEach(link => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        
        newLink.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href) return true;
            
            // Handle HTML page navigation
            if (href.endsWith('.html')) return true;
            
            // Handle tab navigation
            if (href.startsWith('#')) {
                const tabId = href.substring(1);
                const tabContent = document.getElementById(tabId);
                
                if (tabContent && tabContent.classList.contains('tab-content')) {
                    e.preventDefault();
                    switchToTab(tabId);
                }
            }
        });
    });
    
    // Initialize tabs
    (() => {
        // Add tab CSS
        document.head.appendChild(Object.assign(document.createElement('style'), {
            textContent: '.tab-content{display:none}.tab-content.active{display:block}'
        }));
        
        const tabLinks = document.querySelectorAll('.tab-link');
        if (tabLinks.length === 0) return;
        
        // Show default tab
        const allTab = document.getElementById('all');
        if (allTab) allTab.classList.add('active');
        
        // Set up tab click handlers
        tabLinks.forEach(link => {
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
            
            newLink.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-tab') || this.getAttribute('href').substring(1);
                switchToTab(targetId);
            });
        });
    })();
    
    // Check for hash in URL
    if (window.location.hash) {
        const tabLink = document.querySelector(`a[href="${window.location.hash}"]`);
        if (tabLink) tabLink.click();
    }
}); 