// JavaScript for toggling dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved preference in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Switch to Light Mode';
}

// Toggle dark mode when button is clicked
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Switch to Light Mode';
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    darkModeToggle.textContent = 'Switch to Dark Mode';
    localStorage.setItem('dark-mode', 'disabled');
  }
});
