document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('toggleMode');
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

    // Function to toggle between light/dark mode
    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('isDarkMode', document.body.classList.contains('dark-mode'));
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerText = '🌚';
        } else {
            themeToggle.innerText = '🌞';
        }
    }

    // Apply theme based on user's preference
    if (isDarkMode) {
        toggleMode();
    }

    // Event listener for theme toggle button
    themeToggle.addEventListener('click', toggleMode);
});
