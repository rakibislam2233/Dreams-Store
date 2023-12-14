/* eslint-disable react/prop-types */
import checkImage from "../assets/image/check.png";
import { useDispatch } from "react-redux";
import addBook from "../redux/books/thunk/addBook";
import { useEffect, useState } from "react";
import updateBook from "../redux/books/thunk/updateBook";
// eslint-disable-next-line react/prop-types
const AddBook = ({ isOpen, setIsOpen, singleBook, setSingleBook }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [isFeature, setIsFeature] = useState();
  useEffect(() => {
    setIsFeature(singleBook?.feature);
  }, [singleBook]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const booksDetails = {
      bookName,
      authorName,
      imageUrl,
      price,
      rating,
      feature: isCheck,
    };
    dispatch(addBook(booksDetails));
    form.reset();
    setIsCheck(false);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const updateBooksDetails = {
      id: singleBook?.id,
      bookName,
      authorName,
      imageUrl,
      price,
      rating,
      feature: isFeature,
    };
    dispatch(updateBook(singleBook?.id, updateBooksDetails));
    form.reset();
    setSingleBook("");
    setIsOpen(false)
  };
  return (
    <>
      <div
        className={`w-full p-5 border rounded bg-white ${!isOpen && "hidden"}`}
      >
        <h1 className="text-2xl font-semibold text-center">Update Book</h1>
        <form onSubmit={handleEditSubmit} className="pt-5 space-y-2">
          <div>
            <label htmlFor="bookName" className="font-semibold">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
              defaultValue={singleBook.bookName}
            />
          </div>
          <div>
            <label htmlFor="authorName" className="font-semibold">
              Author
            </label>
            <input
              type="text"
              name="authorName"
              id="authorName"
              className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
              defaultValue={singleBook.authorName}
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="font-semibold">
              ImageUrl
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
              defaultValue={singleBook.imageUrl}
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <div>
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
                defaultValue={singleBook.price}
              />
            </div>
            <div>
              <label htmlFor="rating" className="font-semibold">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                id="rating"
                className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
                defaultValue={singleBook.rating}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            {isFeature ? (
              <img
                onClick={() => setIsFeature(!isFeature)}
                className="w-5 h-5"
                src={checkImage}
                alt=""
              />
            ) : (
              <div
                onClick={() => setIsFeature(!isFeature)}
                className="w-5 h-5 border border-gray-800 rounded cursor-pointer"
              ></div>
            )}
            <label htmlFor="checkbox">This is a featured book</label>
          </div>
          <button className="w-full px-5 py-1 bg-gradient-to-r from-blue-500 to-green-500 rounded text-white font-semibold">
            Update Book
          </button>
        </form>
      </div>
      <div
        className={`w-full p-5 border rounded bg-white ${isOpen && "hidden"}`}
      >
        <h1 className="text-2xl font-semibold text-center">Add Book</h1>
        <form onSubmit={handleSubmit} className="pt-5 space-y-2">
          <div>
            <label htmlFor="bookName" className="font-semibold">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="authorName" className="font-semibold">
              Author
            </label>
            <input
              type="text"
              name="authorName"
              id="authorName"
              className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="font-semibold">
              ImageUrl
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
              required
            />
          </div>
          <div className="flex justify-between items-center gap-5">
            <div>
              <label htmlFor="price" className="font-semibold">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="rating" className="font-semibold">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                id="rating"
                className="w-full px-3 py-1 outline-none rounded border border-gray-700 focus:border-green-500"
                min={1}
                max={5}
                required
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            {isCheck ? (
              <img
                onClick={() => setIsCheck(!isCheck)}
                className="w-5 h-5"
                src={checkImage}
                alt=""
              />
            ) : (
              <div
                onClick={() => setIsCheck(!isCheck)}
                className="w-5 h-5 border border-gray-800 rounded cursor-pointer"
              ></div>
            )}
            <label htmlFor="checkbox">This is a featured book</label>
          </div>
          <button className="w-full px-5 py-1 bg-gradient-to-r from-blue-500 to-green-500 rounded text-white font-semibold">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
