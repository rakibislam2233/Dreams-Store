import { loaded } from "../action";

const fetchBook = async (dispatch) => {
  const res = await fetch("http://localhost:8000/books");
  const books = await res.json();
  dispatch(loaded(books));
};
export default fetchBook;
