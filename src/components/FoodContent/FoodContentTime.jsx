export default function FoodContentTime({
  selectedRecipe,
  saveBookmark,
  addServingClick,
  subtractServingClick,
  servingQuantity,
  deleteBookmark,
  foodRecipes,
}) {
  const currentRecipe =
    foodRecipes.find((recipe) => recipe.id === selectedRecipe.id) || false;

  return (
    <div className="food_content_time">
      {/* <div className="time_content"> */}
      <div className="time_center">
        <img
          src="https://cdn0.iconfinder.com/data/icons/startup-17/32/startup-61-256.png"
          className="time_img"
        />
        <span>{selectedRecipe.cooking_time} MINUTES</span>
      </div>
      <div className="time_center">
        <img
          src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/users4-256.png"
          className="time_img"
        />
        <span>{selectedRecipe.servings * servingQuantity} SERVINGS</span>
        <button className="serving_button" onClick={subtractServingClick}>
          -
        </button>
        <button className="serving_button" onClick={addServingClick}>
          +
        </button>
        {currentRecipe.isSaved ? (
          <img
            src="https://cdn0.iconfinder.com/data/icons/evericons-24px-vol-1/24/bookmark-no-256.png"
            className="nav_img"
            onClick={() => deleteBookmark(selectedRecipe)}
          />
        ) : (
          <img
            src="https://cdn4.iconfinder.com/data/icons/48-bubbles/48/11.Notebook-256.png"
            className="nav_img"
            onClick={() => saveBookmark(selectedRecipe)}
          />
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
