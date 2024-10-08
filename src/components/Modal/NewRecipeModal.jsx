import { forwardRef } from "react";
import Input from "../UI/Input";
import { AnimatePresence, motion } from "framer-motion";

const NewRecipeModal = forwardRef(function NewRecipeModal(
  { closeRecipeModal },
  ref
) {
  // Add a + button on the ingredient instead of repeating ingredient 6 times.
  // improve design of NewRecipeModal
  // Implement the new Form Data and save it for functionality
  return (
    <AnimatePresence>
      <motion.dialog
        ref={ref}
        onClose={closeRecipeModal}
        initial={{ y: "-100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form>
          <div className="add_recipe_grid">
            <div className="recipe_data">
              <div>
                <h1>Recipe Data</h1>
              </div>
              <Input label="Title" />
              <Input label="URL" />
              <Input label="Image URL" />
              <Input label="Publisher" />
              <Input label="Prep Time" />
              <Input label="Serving" />
            </div>
            <div className="ingredients_data">
              <div>
                <h1>Ingredients</h1>
              </div>
              <Input label="Ingredient" />
              <Input label="Ingredient" />
              <Input label="Ingredient" />
              <Input label="Ingredient" />
              <Input label="Ingredient" />
              <Input label="Ingredient" />
            </div>
          </div>
        </form>
        <div className="new_recipe_actions">
          <button onClick={closeRecipeModal}>Close</button>
          <button>Upload</button>
        </div>
      </motion.dialog>
    </AnimatePresence>
  );
});

export default NewRecipeModal;
