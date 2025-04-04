document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.textContent = '☰';
            }
        });
    });
    
    // Typing effect for hero section
    const typingText = document.getElementById('typing-text');
    const fullText = "Hello 🚀, I'm Kiptoo Rotich Emmanuel ";
    let i = 0;
    
    function typeWriter() {
        if (i < fullText.length) {
            typingText.textContent = fullText.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
    
    // Animate header on scroll
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active section detection
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitSpinner = document.getElementById('submit-spinner');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitText.classList.add('hidden');
            submitSpinner.classList.remove('hidden');
            formMessage.textContent = '';
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(function() {
                // Reset form
                contactForm.reset();
                
                // Show success message
                formMessage.textContent = 'Message sent successfully!';
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                
                // Reset button state
                submitText.classList.remove('hidden');
                submitSpinner.classList.add('hidden');
                
                // Hide message after 5 seconds
                setTimeout(function() {
                    formMessage.textContent = '';
                    formMessage.classList.remove('success');
                }, 5000);
            }, 2000);
        });
    }
    
    // Download resume button
    const downloadResume = document.getElementById('download-resume');
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real implementation, this would trigger a download
            alert('Downloading resume...');
            // window.open('path/to/resume.pdf', '_blank');
        });
    }
    
    // Create floating tech icons
    function createFloatingIcons() {
        const floatingIconsContainer = document.querySelector('.floating-tech-icons');
        if (!floatingIconsContainer) return;
        
        const icons = [
            { class: 'fab fa-react', color: '#61DAFB' },
            { class: 'fab fa-js', color: '#F7DF1E' },
            { class: 'fab fa-node-js', color: '#68A063' },
            { class: 'fab fa-python', color: '#3776AB' },
            { class: 'fab fa-aws', color: '#FF9900' }
        ];
        
        icons.forEach((icon, index) => {
            const iconElement = document.createElement('i');
            iconElement.className = icon.class;
            iconElement.style.color = icon.color;
            iconElement.style.fontSize = `${Math.random() * 20 + 20}px`;
            iconElement.style.left = `${Math.random() * 80 + 10}%`;
            iconElement.style.top = `${Math.random() * 80 + 10}%`;
            
            // Random animation duration and delay
            const duration = Math.random() * 30 + 20;
            const delay = Math.random() * 10;
            iconElement.style.animation = `floatAround ${duration}s linear ${delay}s infinite`;
            
            floatingIconsContainer.appendChild(iconElement);
        });
    }
    
    createFloatingIcons();
    
    // Animate tech badges in hero image
    function animateTechBadges() {
        const reactBadge = document.querySelector('.react-badge');
        const nodeBadge = document.querySelector('.node-badge');
        
        if (reactBadge) {
            reactBadge.style.animation = 'float 4s ease-in-out infinite';
        }
        
        if (nodeBadge) {
            nodeBadge.style.animation = 'float 5s ease-in-out infinite 1s';
        }
    }
    
    animateTechBadges();
    
    // Image error handling
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect fill="%23dddddd" width="100" height="100"/%3E%3Ctext fill="%23666666" font-family="sans-serif" font-size="20" dy=".35em" text-anchor="middle" x="50" y="50"%3E👨‍💻%3C/text%3E%3C/svg%3E';
        });
    });
});