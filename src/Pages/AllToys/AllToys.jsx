import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Toys from "./Toys";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const url = `http://localhost:5000/newToySuperHero?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }),
    [url];
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">All Toys</h1>
      <input className="bg-gray-500 rounded-sm ml-48 h-10 pl-3"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by toy name"
      />

      <table className="w-[1350px] mx-auto rounded-lg bg-gray-600 h-14 mt-5 text-yellow-50 mb-6">
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
          </tr>
        </thead>
      </table>
      <div className="mt-6">
        {allToys
          .filter((toy) =>
            toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 20)
          .map((toys) => (
            <Toys key={toys._id} toys={toys}></Toys>
          ))}
      </div>
    </div>
  );
};

export default AllToys;
