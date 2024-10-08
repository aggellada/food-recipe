import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BookmarkModal = forwardRef(function BookmarkModal(
  { closeBookmarksModal, bookmarks, selectedRecipeClickModal, deleteBookmark },
  ref
) {
  // Improve BookmarkModal design
  // Fix Buttons and spacing
  const [currentBookmarkPage, setCurrentBookmarkPage] = useState(1);

  const bookmarksPerPage = 5;
  const totalBookmarkPage = bookmarks.length / bookmarksPerPage;
  const lastBookmarkIndex = bookmarksPerPage * currentBookmarkPage;
  const firstBookmarkIndex = lastBookmarkIndex - bookmarksPerPage;
  const slicedBookmark = bookmarks.slice(firstBookmarkIndex, lastBookmarkIndex);

  const nextBookmarkPage = () => {
    setCurrentBookmarkPage((prev) => {
      if (prev >= totalBookmarkPage) return prev;
      return prev + 1;
    });
  };

  const previousBookmarkPage = () => {
    setCurrentBookmarkPage((prev) => {
      if (prev <= 1) return prev;
      return prev - 1;
    });
  };

  console.log(bookmarks);

  return (
    <AnimatePresence>
      <motion.dialog
        ref={ref}
        onClose={closeBookmarksModal}
        className="bookmarks_modal"
        initial={{ y: "-100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bookmarks_modal_grid">
          {bookmarks.length > 0 ? (
            slicedBookmark.map((bookmark) => {
              return (
                <div key={bookmark} className="bookmark_item">
                  <div
                    className="bookmark_item_title"
                    onClick={() => selectedRecipeClickModal(bookmark)}
                  >
                    <p>{bookmark.title}</p>
                  </div>
                  <button
                    className="bookmark_delete"
                    onClick={() => deleteBookmark(bookmark)}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <p>No bookmarks saved...</p>
          )}
        </div>
        <div className="bookmark_actions">
          <div className="page_controller">
            <p>
              <button onClick={previousBookmarkPage}>LEFT</button> ----{" "}
              {currentBookmarkPage} of {Math.ceil(totalBookmarkPage)} ----{" "}
              <button onClick={nextBookmarkPage}>RIGHT</button>
            </p>
          </div>
          <div className="bookmarks_close_div">
            <button onClick={closeBookmarksModal}>Close</button>
          </div>
        </div>
      </motion.dialog>
    </AnimatePresence>
  );
});

export default BookmarkModal;
