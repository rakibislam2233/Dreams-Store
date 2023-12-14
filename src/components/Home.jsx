import { useEffect, useState } from "react";
import AddBook from "./AddBook";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import fetchBook from "../redux/books/thunk/fetchBook";
import removeBook from "../redux/books/thunk/removeBook";
import { statusChanged } from "../redux/filter/action";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Home = ({ query }) => {
  const [isOpen, setIsOpen] = useState(false);
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter.status);
  const [singleBook, setSingleBook] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook);
  }, [dispatch]);
  //console.log(Array.isArray(books)) redux a ai prblm hote pare ai khane check kortese j aita array ki nai array hole map koro nai hoile map korio na
  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };
  const handleEdit = async (bookId) => {
    const res = await fetch(`http://localhost:8000/books/${bookId}`);
    const book = await res.json();
    setSingleBook(book);
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 p-5">
      <div className="md:col-span-8">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-semibold">Book List</h1>
          <div className="space-x-3">
            <button
              onClick={() => dispatch(statusChanged("all"))}
              className={`px-8 py-1 rounded-full ${
                filter === "all" &&
                "bg-gradient-to-r from-blue-500 to-green-500"
              } text-gray-800 font-semibold border  border-green-500`}
            >
              All
            </button>
            <button
              onClick={() => dispatch(statusChanged("featured"))}
              className={`px-5 py-1 rounded-full ${
                filter === "featured" &&
                "bg-gradient-to-r from-blue-500 to-green-500"
              } border border-green-500  font-semibold text-gray-800`}
            >
              Featured
            </button>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
          {books.length <= 0 ? (
            <h1>Not Data Available</h1>
          ) : (
            <>
              {books
                .filter((book) =>
                  book?.bookName?.toLowerCase()?.includes(query)
                )
                .filter((book) => {
                  if (filter === "featured") {
                    return book.feature === true;
                  }
                  return book;
                })
                .map((book, i) => (
                  <div
                    key={i}
                    className="w-full grid grid-cols-1 md:grid-cols-12 border rounded-xl bg-white"
                  >
                    <img
                      className="w-full h-56 mx-auto rounded-l-xl col-span-4"
                      src={book.imageUrl}
                      alt=""
                    />
                    <div className="col-span-8 p-2">
                      <div className="flex justify-between items-center">
                        {book.feature ? (
                          <div className="px-1  text-white bg-gradient-to-r from-blue-500 to-green-500  rounded-full">
                            Featured
                          </div>
                        ) : (
                          <div></div>
                        )}
                        <div className="space-x-2">
                          <button onClick={() => handleEdit(book.id)}>
                            <FiEdit className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDelete(book.id)}>
                            <FiTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="pt-5 space-y-2">
                        <h1 className="text-xl font-semibold">
                          {book.bookName}
                        </h1>
                        <h1 className="font-semibold">{book.authorName}</h1>
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={book.rating}
                          readOnly
                        />
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
                          BDT {book.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
      <div className="md:col-span-4">
        <AddBook
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          singleBook={singleBook}
          setSingleBook={setSingleBook}
        />
      </div>
    </div>
  );
};

export default Home;
