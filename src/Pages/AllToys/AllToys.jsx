import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysData from "./ToysData";

const AllToys = () => {
  const allToys = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
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
        className="bg-gray-500 rounded-sm ml-48 h-10 pl-3"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by toy name"
      />
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
          {allToys
            .slice(0, 20)
            .map((toy) => (
              <ToysData key={toy._id} toy={toy}></ToysData>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
{
  /* <div className="flex justify-center -ml-56 gap-36  mx-auto leading-loose mb-8 text-gray-600 font-bold">
<img className="h-20 w-20" src={imageURL} alt="" />
<h5 className="text-center">{sellerName}</h5>
<h5 className="text-center -ml-10">{toyName}</h5>
<h5 className="text-center">{subCategory}</h5>
<h5 className="text-center">{price}</h5>
<h5 className="text-center">{quantity}</h5>
<Link to={`/toyDetails/${_id}`}><button className="btn btn-outline">View Details</button></Link> */
}
