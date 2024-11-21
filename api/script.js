function fetchRandomMeal() {
    const apiKey = "5e3c6de8268b422c81b427907bcd3437"; // Replace with your Spoonacular API key
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;
  
    fetch(url)
      .then(response => response.json())  // Parse the JSON response
      .then(data => {
        const meal = data.recipes[0]; // Get the first random recipe
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
  