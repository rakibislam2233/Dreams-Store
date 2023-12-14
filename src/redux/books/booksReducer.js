/* eslint-disable no-case-declarations */
import { ADDED,LOADED, REMOVED, UPDATE } from "./actionType";
import inialState from "./initialState";

const booksReducer = (state = inialState, action) => {
  switch (action.type) {
    case LOADED:
      return (state = action.payload);
    case ADDED:
      if (state.length === 0) {
        return [
          ...state,
          {
            id: 1,
            ...action.payload,
          },
        ];
      } else {
        const lastElement = state.at(-1);
        return [
          ...state,
          {
            id: lastElement.id + 1,
            ...action.payload,
          },
        ];
      }
    case UPDATE:
      console.log(action.payload.bookDetails);
      return state.map((book) => {
        if (book.id === action.payload.bookId) {
          console.log(book);
          return {
            ...action.payload.bookDetails,
          };
        }
        return book;
      });
    case REMOVED:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};
export default booksReducer;
