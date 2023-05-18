import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../Providers/AuthProviders";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-around items-center bg-gray-800 pb-2 mb-4">
      <div className="flex justify-center items-center text-2xl gap-4">
        <img
          className="w-16 h-24"
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
        <ul className="flex justify-center items-center text-gray-400 gap-8 uppercase mt-4 font-semibold">
          <Link to="/">
            {" "}
            <li className="navItem">Home</li>
          </Link>
          <Link to="/allToys">
            {" "}
            <li className="navItem">All Toys</li>
          </Link>
         {
            user? <Link to="/myToys">
            {" "}
            <li className="navItem">My Toys</li>
          </Link>:""
         }
          {
            user?<Link to="/addAToy">
            {" "}
            <li className="navItem">Add A Toy</li>
          </Link>:""
          }
          <Link to="/blogs">
            {" "}
            <li className="navItem">Blogs</li>
          </Link>
          {user ? (
          <>
           <div title={user.displayName}>
            <img className="w-10 h-10 rounded-full bg-white" src={user.photoURl} alt="" />
           </div>
           <Link to="/signup">
              <button onClick={handleLogout} className="btn btn-active btn-ghost">Logout</button>
            </Link>
          </>
          ) : (
            <Link to="/login">
              <button className="btn btn-active btn-ghost">Login</button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
