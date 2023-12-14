import { added } from "../action";

const addBook = (bookDetails) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:8000/books", {
      method: "POST",
      body: JSON.stringify(bookDetails),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const data = await res.json();
    dispatch(added(data))
  };
};
export default addBook;
