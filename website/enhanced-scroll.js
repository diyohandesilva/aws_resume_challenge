// Enhanced scroll animations and section visibility

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all sections as invisible
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('invisible');
    });

    // Enhanced Intersection Observer for section animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate timeline items with delay
                if (entry.target.classList.contains('experience')) {
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
                    timelineItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200);
                    });
                }
                
                // Animate skill tags with stagger
                if (entry.target.classList.contains('skills')) {
                    const skillTags = entry.target.querySelectorAll('.skill-tag');
                    skillTags.forEach((tag, index) => {
                        setTimeout(() => {
                            tag.classList.add('visible');
                        }, index * 50);
                    });
                }
                
                // Animate stats
                if (entry.target.classList.contains('about')) {
                    const stats = entry.target.querySelectorAll('.stat h3');
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.classList.add('visible');
                        }, index * 200);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-10% 0px'
    });

    // Observe all sections for animations
    sections.forEach(section => {
        animationObserver.observe(section);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Smooth scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
});
