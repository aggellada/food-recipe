import { useState } from "react";
import { motion } from "framer-motion";
import FoodContentImg from "./FoodContentImg";
import FoodContentTime from "./FoodContentTime";
import FoodContentRecipes from "./FoodContentRecipes";

export default function FoodContent({
  selectedRecipe,
  saveBookmark,
  bookmarks,
  deleteBookmark,
  foodRecipes,
}) {
  // ------------- ADD/SUBTRACT SERVINGS ------------------
  const [servingQuantity, setServingQuantity] = useState(1);

  const addServingClick = () => {
    setServingQuantity((prev) => prev + 1);
  };

  const subtractServingClick = () => {
    setServingQuantity((prev) => {
      if (prev <= 1) return prev;
      return prev - 1;
    });
  };

  return (
    <motion.div
      className="food_content_recipe_grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FoodContentImg selectedRecipe={selectedRecipe} />
      <FoodContentTime
        selectedRecipe={selectedRecipe}
        saveBookmark={saveBookmark}
        servingQuantity={servingQuantity}
        bookmarks={bookmarks}
        deleteBookmark={deleteBookmark}
        foodRecipes={foodRecipes}
        addServingClick={addServingClick}
        subtractServingClick={subtractServingClick}
      />
      <FoodContentRecipes
        servingQuantity={servingQuantity}
        selectedRecipe={selectedRecipe}
      />
    </motion.div>
  );
}
