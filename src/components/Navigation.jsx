/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
const Navigation = ({handleSearch}) => {
  return (
    <nav className="w-full py-6 bg-slate-50 border-b">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">Dreams Store</h1>
       <div className="hidden md:block">
       <ul className="flex flex-col  md:flex-row gap-5 items-center justify-center font-semibold text-gray-800">
            <li><Link>Home</Link></li>
            <li><Link>Book Store</Link></li>
            <li><Link>Wishlist</Link></li>
            <li><Link>My Collection</Link></li>
        </ul>
       </div>
        <div>
            <div className="border p-1 rounded-full flex justify-between items-center">
                <input onChange={handleSearch} type="text" name="searchText" id="searchText" className="px-3 py-1 rounded outline-none bg-transparent " placeholder="Search your book" />
                <button className="flex justify-center items-center"><IoSearchOutline className="w-6 h-6"/></button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
