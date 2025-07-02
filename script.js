document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // --- Dark Mode Logic ---

    // Function to set theme
    function setTheme(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
            localStorage.setItem('theme', 'light');
        }
    }

    // Check for saved theme preference or system preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no saved theme, check system preference
        setTheme('dark');
    } else {
        setTheme('light'); // Default to light mode if no preference found
    }

    // Toggle theme on button click
    darkModeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    // --- Scroll to Top Logic ---

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "flex"; // Use flex to center icon
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    window.scrollToTop = function() { // Made global for onclick in HTML
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling!
        });
    };
});
