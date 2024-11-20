// Add Ingredient to Pantry
document.getElementById('add-ingredient').addEventListener('click', function () {
    let ingredientInput = document.getElementById('ingredient').value;
    if (ingredientInput.trim() !== "") {
        let ul = document.getElementById('ingredient-list');
        let li = document.createElement('li');
        li.textContent = ingredientInput;
        ul.appendChild(li);
        document.getElementById('ingredient').value = ""; // Clear the input field after adding
    } else {
        alert("Please enter a valid ingredient.");
    }
});

// Search Recipe and Redirect
function searchRecipe() {
    let recipeName = document.getElementById('recipe-name').value.trim();
    if (recipeName !== "") {
        // Redirect to recipe-results.html with the recipe name as a query parameter
        window.location.href = "recipe-results.html?recipe=" + encodeURIComponent(recipeName);
    } else {
        alert("Please enter a recipe name to search.");
    }
}
