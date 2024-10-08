import FoodContent from "./FoodContent/FoodContent";
import Navigation from "./Navigation/Navigation";
import FoodNavigation from "./Navigation/FoodNavigation";

export default function Landing({
  handleSubmit,
  foodRecipes,
  currentPage,
  foodLength,
  nextPage,
  previousPage,
  selectedRecipe,
  saveBookmark,
  selectedRecipeClick,
  openBookmark,
  openRecipeModal,
  bookmarks,
  deleteBookmark,
}) {
  return (
    <div className="overall_layout">
      <div className="app_container">
        <Navigation
          handleSubmit={handleSubmit}
          openBookmark={openBookmark}
          openRecipeModal={openRecipeModal}
        />
        <div className="flex_container">
          <FoodNavigation
            foodRecipes={foodRecipes}
            selectedRecipeClick={selectedRecipeClick}
            previousPage={previousPage}
            currentPage={currentPage}
            nextPage={nextPage}
            foodLength={foodLength}
          />
          <div className="food_content">
            {selectedRecipe && (
              <FoodContent
                key={selectedRecipe.title}
                selectedRecipe={selectedRecipe}
                saveBookmark={saveBookmark}
                bookmarks={bookmarks}
                deleteBookmark={deleteBookmark}
                foodRecipes={foodRecipes}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
