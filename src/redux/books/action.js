import { ADDED,LOADED, REMOVED, UPDATE } from "./actionType";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};
export const added = (bookDetails) => {
  return {
    type: ADDED,
    payload: bookDetails,
  };
};
export const updated = (bookId, bookDetails) => {
  return {
    type: UPDATE,
    payload: { bookId, bookDetails },
  };
};
export const removed = (bookId) => {
  return {
    type: REMOVED,
    payload: bookId,
  };
};