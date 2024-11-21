// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Switch to Light Mode';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Switch to Light Mode';
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    darkModeToggle.textContent = 'Switch to Dark Mode';
    localStorage.setItem('dark-mode', 'disabled');
  }
});

// Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
  hamburger.classList.toggle('open'); // Optional: Add a class for hamburger icon animation
});

// Optional: Close menu when a link is clicked (for single-page apps)
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

// Fetch Random Meal from API
function fetchRandomMeal() {
  const apiKey = "5e3c6de8268b422c81b427907bcd3437"; 
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;

  fetch(url)
    .then(response => response.json())  
    .then(data => {
      const meal = data.recipes[0]; 
      const mealContainer = document.querySelector("#meal-container");

      mealContainer.innerHTML = `
        <h2>${meal.title}</h2>
        <img src="${meal.image}" alt="${meal.title}" style="width: 300px;">
        <p><strong>Instructions:</strong> ${meal.instructions || "No instructions available."}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          ${meal.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
        </ul>
      `;
    })
    .catch(error => {
      console.error("Error fetching meal:", error);
      document.querySelector("#meal-container").innerHTML = '<p>There was an error fetching the recipe. Please try again later.</p>';
    });
}
