import { removed } from "../action";

const removeBook = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:8000/books/${bookId}`, {
      method: "DELETE",
    });
    dispatch(removed(bookId));
  };
};
export default removeBook;
