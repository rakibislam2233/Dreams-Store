import { combineReducers } from "redux";
import booksReducer from "./books/booksReducer";
import filterReducer from "./filter/filterReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    filter:filterReducer
})
export default rootReducer;