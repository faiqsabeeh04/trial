const recipeList = document.querySelector("#recipe-list");

const recipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"]
  },
  {
    name: "Pancakes",
    ingredients: ["flour", "eggs", "milk", "baking powder", "sugar", "vanilla extract"]
  },
  {
    name: "Stir-Fry",
    ingredients: ["rice", "vegetables", "soy sauce", "sesame oil", "chicken or tofu"]
  }
];

recipes.forEach(function(recipe) {
  const listItem = document.createElement("li");
  listItem.textContent = recipe.name;
  recipeList.appendChild(listItem);
});
