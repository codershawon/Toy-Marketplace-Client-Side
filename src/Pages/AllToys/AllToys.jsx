import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import ToysData from "./ToysData";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [toys, setToys] = useState([]);
useTitle("All Toys")
  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axios.get("/newToySuperHero", {
          params: { email: "", limit: 20 },
        });
        setToys(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToys();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get("/newToySuperHero", {
        params: { email: searchQuery, limit: 20 },
      });
      setToys(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredToys = allToys
    ? allToys.filter((toy) =>
        toy.name?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div>
      <h1
        style={{
          background:
            "radial-gradient(126.75% 133.09% at 50% 49.99%, #DC8D48 0%, #D38745 4.19%, #91572B 36.95%, #5E3116 66.01%, #3F1A0A 87.87%, #331105 100%)",
        }}
        className="text-center font-bold text-3xl bg-amber-900 w-60 rounded-lg mx-auto uppercase text-white"
      >
        All Toys
      </h1>
      <input
        className="bg-gray-100 border-2 border-slate-300 rounded-sm ml-[750px] h-10 pl-3 mt-7"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by toy name"
      />
      <button className="bg-gray-100 h-10 rounded-sm border-2" onClick={handleSearch}>Search</button>
      <table className="table table-compact w-[1500px]  mx-auto rounded-lg bg-gray-600 mt-5 mb-6">
        <thead>
          <tr className="text-yellow-50">
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details Button</th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map((toy) => (
            <ToysData key={toy._id} toy={toy}></ToysData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

