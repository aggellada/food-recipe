export default function FoodContentRecipes({
  servingQuantity,
  selectedRecipe,
}) {
  return (
    <div className="food_content_main_recipes">
      <h1>INGREDIENTS</h1>
      <div className="food_ingredients">
        {selectedRecipe.ingredients.map((ingredients) => {
          const servingQuantityTest = ingredients.quantity
            ? ingredients.quantity * servingQuantity
            : null;
          return (
            <li key={ingredients.description}>
              <strong>{servingQuantityTest}</strong> {ingredients.unit}{" "}
              {ingredients.description}
            </li>
          );
        })}
      </div>
    </div>
  );
}
