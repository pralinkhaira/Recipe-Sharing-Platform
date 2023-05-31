// app.js

// Sample recipe data
const recipes = [
  { title: "Pancakes", ingredients: ["Flour", "Milk", "Eggs"], instructions: "1. Mix ingredients\n2. Cook on a griddle" },
  { title: "Spaghetti Bolognese", ingredients: ["Pasta", "Ground beef", "Tomato sauce"], instructions: "1. Cook pasta\n2. Brown beef\n3. Add tomato sauce\n4. Simmer" }
];

// Function to render recipes
function renderRecipes() {
  const recipeList = document.getElementById('recipeList');
  recipeList.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe');

    const recipeTitle = document.createElement('h2');
    recipeTitle.textContent = recipe.title;

    const recipeIngredients = document.createElement('p');
    recipeIngredients.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;

    const recipeInstructions = document.createElement('p');
    recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;

    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeInstructions);

    recipeList.appendChild(recipeItem);
  });
}

// Function to handle the "Add Recipe" button click event
function handleAddRecipe() {
  const newRecipe = {
    title: prompt("Enter recipe title:"),
    ingredients: prompt("Enter recipe ingredients (comma-separated):").split(','),
    instructions: prompt("Enter recipe instructions:")
  };

  recipes.push(newRecipe);
  renderRecipes();
}

// Add event listener to the "Add Recipe" button
const addRecipeBtn = document.getElementById('addRecipeBtn');
addRecipeBtn.addEventListener('click', handleAddRecipe);

// Initial rendering of recipes
renderRecipes();
