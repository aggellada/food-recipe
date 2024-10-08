import FoodItem from "./FoodItem";

export default function FoodNavigation({
  foodRecipes,
  selectedRecipeClick,
  previousPage,
  currentPage,
  nextPage,
  foodLength,
}) {
  return (
    <div className="food_navigation">
      <div className="food_navigation_header">
        <h1>MEAL</h1>
      </div>
      {foodRecipes.length > 0 &&
        foodRecipes.map((foodItem, index) => {
          return (
            <FoodItem
              key={foodItem.id}
              foodItem={foodItem}
              index={index}
              selectedRecipeClick={selectedRecipeClick}
            />
          );
        })}
      <div className="page_controller">
        {foodRecipes.length > 0 ? (
          <p>
            <span>
              <button onClick={previousPage}>PREVIOUS</button>
            </span>{" "}
            ------- {currentPage} of {Math.ceil(foodLength)}--------{" "}
            <span>
              <button onClick={nextPage}>NEXT</button>
            </span>{" "}
          </p>
        ) : (
          <p>Search a recipe...</p>
        )}
      </div>
    </div>
  );
}
