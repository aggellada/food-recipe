import { useRef } from "react";

export default function Navigation({
  handleSubmit,
  openBookmark,
  openRecipeModal,
}) {
  const searchRef = useRef();

  return (
    <div className="navigation_bar">
      <div className="app_title">
        <img
          src="https://cdn2.iconfinder.com/data/icons/cooking-58/64/30-cook_book-recipe_book-recipe-ingredients-kitchen-book-256.png"
          alt="RecipeQuest Logo"
          className="nav_img"
        />
        <span>RECIPEQUEST</span>
      </div>
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search over 1,000,000 recipes..."
          ref={searchRef}
        />
        <button onClick={() => handleSubmit(searchRef)}>Search</button>
      </div>
      <div className="nav_icon_container">
        <button onClick={openRecipeModal}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/web-design-29/60/notepad__form__pencil__note-256.png"
            className="nav_img"
          />
          ADD RECIPE
        </button>
        <button onClick={openBookmark}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-46-512.png"
            className="nav_img"
          />
          BOOKMARKS
        </button>
      </div>
    </div>
  );
}
