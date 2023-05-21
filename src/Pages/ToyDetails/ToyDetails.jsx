import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const ToyDetails = () => {
const {user}=useContext(AuthContext)
const toyDetails=useLoaderData()
console.log(toyDetails)
useTitle("Toy Details")
  const {
    image,
    name,
    sellerName,
    email,
    price,
    rating,
    quantity,
    details,
  } = toyDetails;

  return (
    <div>
      <div className="card w-[450px] mx-auto bg-[#F3f3f3] shadow-xl mb-4">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" alt="Toy" />
        </figure>
        <div className="card-body items-left text-left leading-10 ml-3">
          <h2 className="card-title">
            <span className="border-s-4 border-gray-500 rounded">
              <span className="ml-2 font-bold uppercase">Toy Name:</span>
            </span>
            <span className="text-[#757575] font-semibold">{name}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Seller Name:</span>
            </span>
            <span className="text-[#757575] font-semibold">{sellerName}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Seller Email:</span>
            </span>
            <span className="text-[#757575] font-semibold">{email}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Price:</span>
            </span>
            <span className="text-[#757575] font-semibold">{price}</span>
          </h2>
          <h2 className="flex gap-4 items-center">
            <span className="border-s-4 border-gray-500 rounded">
              <span className="ml-2 font-bold uppercase">Ratings:</span>
            </span>
            <span className="text-[#757575] font-semibold">
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={rating}
                  readOnly
                />
              </p>
            </span>
          </h2>
          <h2>
            <span className="border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">
                Available Quantity:
              </span>
            </span>
            <span className="text-[#757575] font-semibold">{quantity}</span>
          </h2>
          <h2>
            <span className="border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Description:</span>
            </span>
            <span className="text-[#757575] font-semibold">{details}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

