export default function FoodContentImg({ selectedRecipe }) {
  return (
    <div className="food_content_img">
      <img src={selectedRecipe.image_url} className="food_img" />
      <div className="food_content_img_title">
        <h1>{selectedRecipe.title}</h1>
      </div>
    </div>
  );
}
