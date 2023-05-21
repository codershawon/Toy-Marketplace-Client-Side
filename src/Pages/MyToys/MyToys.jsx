import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Toys from "./Toys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);
  const url = `http://localhost:5000/newToySuperHero?email=${user?.email}&sortField=price&sortOrder=${sortOrder}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  const handleSort = () => {
    setSortOrder(sortOrder === 1 ? -1 : 1);
  };

  return (
    <div>
      <h1
        style={{
          background:
            "radial-gradient(126.75% 133.09% at 50% 49.99%, #DC8D48 0%, #D38745 4.19%, #91572B 36.95%, #5E3116 66.01%, #3F1A0A 87.87%, #331105 100%)",
        }}
        className="text-center font-bold text-3xl bg-amber-900 w-60 rounded-lg mx-auto uppercase text-white"
      >
        My Toys
      </h1>
      <div>
      <div>
        <div className="dropdown dropdown-hover relative left-[1480px]">
          <label tabIndex={0} className="btn  m-1">
            Sort By Price
          </label>
          <ul className="dropdown-content menu p-2 shadow bg-gray-400 rounded-box w-52">
            <li>
              <button onClick={() => handleSort(1)}>Ascending</button>
            </li>
            <li>
              <button onClick={() => handleSort(-1)}>Descending</button>
            </li>
          </ul>
        </div>
      </div>
      <table className="table table-compact w-[1500px]  mx-auto rounded-lg bg-gray-600 mt-5 mb-6">
        <thead>
          <tr className="text-yellow-50">
            <th>Toy Image</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Ratings</th>
            <th>Details</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toys) => (
            <Toys key={toys._id} toys={toys}></Toys>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MyToys;