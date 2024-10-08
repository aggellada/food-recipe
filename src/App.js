import { useEffect, useState, useRef } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Modal from "./components/Modal/BookmarkModal";
import NewRecipeModal from "./components/Modal/NewRecipeModal";

const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function App() {
  const [foodRecipes, setFoodRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarks, setBookmarks] = useState(savedBookmarks);
  const [showNewRecipe, setShowNewRecipe] = useState(false);
  const [showBookmarksModal, setBookmarksModal] = useState(false);

  console.log(selectedRecipe);
  const postsPerPage = 10;
  const lastRecipeIndex = currentPage * postsPerPage;
  const firstRecipeIndex = lastRecipeIndex - postsPerPage;
  const currentPost = foodRecipes
    ? foodRecipes.slice(firstRecipeIndex, lastRecipeIndex)
    : null;
  const foodLength = foodRecipes.length / postsPerPage;

  const bookmarkModal = useRef();
  const newRecipeModal = useRef();

  // --------------------- SAVE TO LOCAL STORAGE -------------------------

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  //  ---------------------- SHOW MODALS -------------------------------

  useEffect(() => {
    if (showNewRecipe) {
      newRecipeModal.current.showModal();
    } else if (showBookmarksModal) {
      bookmarkModal.current.showModal();
    }
  }, [showNewRecipe, showBookmarksModal]);

  // ------------------ FETCH RECIPE DATA --------------------------------

  useEffect(() => {
    const searchRecipe = async () => {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Could not fetch the data.");
        }

        setFoodRecipes(data.data.recipes);
      } catch (error) {
        throw error;
      }
    };
    searchRecipe();
  }, [search]);

  // ------------------- RECIPE CLICK -----------------------------

  const selectedRecipeClick = async (foodItem) => {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${foodItem.id}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("Could not fetch data.");
      }
      setSelectedRecipe(data.data.recipe);
    } catch (err) {
      throw err;
    }
  };

  // ------------------ SEARCH BUTTON SUBMIT ------------------------

  const handleSubmit = (searchRef) => {
    setSearch(searchRef.current.value);
  };

  // -------------------- PAGINATION -----------------------

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (lastRecipeIndex >= foodRecipes.length) return prev;
      return prev + 1;
    });
  };

  const previousPage = () => {
    setCurrentPage((prev) => {
      if (prev <= 1) return prev;
      return prev - 1;
    });
  };

  // ------------- BOOKMARK RECIPE CLICK -------------------

  const selectedRecipeClickModal = async (foodItem) => {
    setSelectedRecipe(foodItem);
    bookmarkModal.current.close();
  };

  // -------------------- BOOKMARK MODAL -----------------------

  const saveBookmark = (selectedRecipe) => {
    setBookmarks((prev) => {
      if (prev.indexOf(selectedRecipe) !== -1) return prev;
      return [...prev, selectedRecipe];
    });

    setFoodRecipes((prev) => {
      return prev.map((recipe) => {
        if (recipe.id === selectedRecipe.id) {
          return { ...recipe, isSaved: true };
        } else {
          return recipe;
        }
      });
    });

    if (bookmarks.indexOf(selectedRecipe) !== -1) return;
    alert("A new bookmark has been added");
  };

  const openBookmark = () => {
    setBookmarksModal(true);
  };

  const closeBookmarksModal = () => {
    setBookmarksModal(false);
    bookmarkModal.current.close();
  };

  const deleteBookmark = (foodItem) => {
    setBookmarks((prev) => {
      return prev.filter((item) => item !== foodItem);
    });

    setFoodRecipes((foodArr) => {
      return foodArr.map((recipe) => {
        if (foodItem.id === recipe.id) {
          return { ...recipe, isSaved: false };
        } else {
          return recipe;
        }
      });
    });
  };

  // ----------- RECIPE MODAL -----------------

  const openRecipeModal = () => {
    setShowNewRecipe(true);
  };

  const closeRecipeModal = () => {
    setShowNewRecipe(false);
    newRecipeModal.current.close();
  };

  // bookmarks, closeBookmarksModal, bookmarkModal
  return (
    <>
      {showBookmarksModal && (
        <Modal
          ref={bookmarkModal}
          closeBookmarksModal={closeBookmarksModal}
          bookmarks={bookmarks}
          selectedRecipeClickModal={selectedRecipeClickModal}
          deleteBookmark={deleteBookmark}
        />
      )}

      {showNewRecipe && (
        <NewRecipeModal
          ref={newRecipeModal}
          closeRecipeModal={closeRecipeModal}
        />
      )}

      <Landing
        selectedRecipe={selectedRecipe}
        foodRecipes={currentPost}
        currentPage={currentPage}
        foodLength={foodLength}
        deleteBookmark={deleteBookmark}
        handleSubmit={handleSubmit}
        nextPage={nextPage}
        previousPage={previousPage}
        selectedRecipeClick={selectedRecipeClick}
        saveBookmark={saveBookmark}
        openBookmark={openBookmark}
        openRecipeModal={openRecipeModal}
        bookmarks={bookmarks}
      />
    </>
  );
}

export default App;
