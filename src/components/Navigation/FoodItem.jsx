import { motion } from "framer-motion";

export default function FoodItem({ foodItem, selectedRecipeClick, index }) {
  return (
    <motion.div
      className="food_item"
      onClick={() => selectedRecipeClick(foodItem)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 * index }}
    >
      <img src={foodItem.image_url} />
      <div>
        <p>{foodItem.title}</p>
        <p className="food_publisher">{foodItem.publisher}</p>
      </div>
    </motion.div>
  );
}
