import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../Providers/AuthProviders";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <div className="flex justify-between lg:justify-around items-center bg-gray-800 pb-2 mb-4 w-[640px] lg:w-full mx-auto pl-10 lg:pl-0">
      {/* Mobile Menu Toggle Button */}
      <button
       className={`md:hidden px-2 text-gray-400 hover:text-white -ml-10 lg:ml-0 ${isMenuOpen ? 'rotate-180' : ''}`}
        onClick={toggleMenu}
      >
        <svg
          className={`h-6 w-6 fill-current ${isMenuOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5h18a1 1 0 110 2H3a1 1 0 110-2zm0 6h18a1 1 0 110 2H3a1 1 0 010-2zm0 6h18a1 1 0 010 2H3a1 1 0 010-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
       
      <div className="flex justify-center items-center text-2xl gap-4">
        <img
          className="w-16 h-24 -ml-44 lg:ml-0"
          src="https://i.ibb.co/JF1LFrJ/photo-1590341328520-63256eb32bc3-removebg-preview-1.png"
          alt=""
        />
        <h1 className="mt-6">
          <span className="text-blue-600 font-bold">SuperHero</span>{" "}
          <span className="text-rose-800 font-bold">Toy</span>{" "}
          <span className="text-yellow-500 font-bold">Kingdom</span>
        </h1>
      </div>
      <div>
        <ul className="hidden md:flex md:justify-center md:items-center text-gray-400 gap-8 uppercase mt-4 font-semibold">
          <Link to="/">
            {" "}
            <li className="navItem">Home</li>
          </Link>
          <Link to="/allToys">
            {" "}
            <li className="navItem">All Toys</li>
          </Link>
          {user ? (
            <Link to="/myToys">
              {" "}
              <li className="navItem">My Toys</li>
            </Link>
          ) : (
            ""
          )}
          {user ? (
            <Link to={`/toySuperHero`}>
              {" "}
              <li className="navItem">Add A Toy</li>
            </Link>
          ) : (
            ""
          )}
          <Link to="/blogs">
            {" "}
            <li className="navItem">Blogs</li>
          </Link>
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <div title={user.displayName}>
                  <img
                    className="w-10 h-10 rounded-full bg-inherit"
                    src={user.photoURl}
                    alt=""
                  />
                </div>
                <Link to="/signup">
                  <button
                    onClick={handleLogout}
                    className="btn btn-active btn-ghost"
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-active btn-ghost">Login</button>
              </Link>
            )}
          </div>
        </ul>
      
      </div>
    </div>
     {/* Mobile Menu */}
     <div className="md:hidden">
     <div
       className={`flex flex-col items-left text-gray-500 gap-4 uppercase mt-4 font-semibold list-none bg-gray-200 w-[640px] lg:w-full mx-auto pl-4 lg:pl-0 px-4 ${
         isMenuOpen ? "" : "hidden"
       }`}
     >
       <Link to="/">
         {" "}
         <li className="navItem">Home</li>
       </Link>
       <Link to="/allToys">
         {" "}
         <li className="navItem">All Toys</li>
       </Link>
       {user ? (
         <Link to="/myToys">
           {" "}
           <li className="navItem">My Toys</li>
         </Link>
       ) : (
         ""
       )}
       {user ? (
         <Link to={`/toySuperHero`}>
           {" "}
           <li className="navItem">Add A Toy</li>
         </Link>
       ) : (
         ""
       )}
       <Link to="/blogs">
         {" "}
         <li className="navItem">Blogs</li>
       </Link>
       <div className=" md:flex items-center gap-2">
         {user ? (
           <>
             <div title={user.displayName}>
               <img
                 className="w-10 h-10 rounded-full bg-inherit"
                 src={user.photoURl}
                 alt=""
               />
             </div>
             <Link to="/signup">
               <button
                 onClick={handleLogout}
                 className="btn btn-active btn-ghost"
               >
                 Logout
               </button>
             </Link>
           </>
         ) : (
           <Link to="/login">
             <button className="btn btn-active btn-ghost">Login</button>
           </Link>
         )}
       </div>
       </div>
       {/* ... Other menu items ... */}
     </div>
     </div>
  );
};

export default Navbar;
