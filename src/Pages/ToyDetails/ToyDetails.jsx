import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(toyDetails.length);
  const {
    imageURL,
    toyName,
    sellerName,
    email,
    price,
    ratings,
    quantity,
    details,
  } = toyDetails;
  return (
    <div>
      <div className="card w-[450px] mx-auto bg-[#F3f3f3] shadow-xl mb-4">
        <figure className="px-10 pt-10">
          <img src={imageURL} className="rounded-xl" />
        </figure>
        <div className="card-body items-left text-left leading-10 ml-3">
          <h2 className="card-title">
            <span className=" border-s-4 border-gray-500 rounded">
              {" "}
              <span className="ml-2 font-bold uppercase">Toy Name:</span>{" "}
            </span>
            <span className="text-[#757575] font-semibold">{toyName}</span>
          </h2>
          <h2>
            <span className=" border-s-4 border-gray-500 rounded mb-3">
              {" "}
              <span className="ml-2 font-bold uppercase">
                Seller Name:
              </span>{" "}
            </span>

            <span className="text-[#757575] font-semibold">{sellerName}</span>
          </h2>
          <h2>
            <span className=" border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Seller Email:</span>{" "}
            </span>

            <span className="text-[#757575] font-semibold">{email}</span>
          </h2>
          <h2>
            <span className=" border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Price:</span>{" "}
            </span>

            <span className="text-[#757575] font-semibold">{price}</span>
          </h2>
          <h2 className="flex gap-4 items-center">
            <span className="border-s-4 border-gray-500 rounded">
              <span className="ml-2 font-bold uppercase">Ratings:</span>{" "}
            </span>

            <span className="text-[#757575] font-semibold">
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 120 }}
                  value={ratings}
                  readOnly
                />
              </p>
            </span>
          </h2>
          <h2>
            <span className=" border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Available Quantity:</span>{" "}
            </span>

            <span className="text-[#757575] font-semibold">{quantity}</span>
          </h2>
          <h2>
            <span className=" border-s-4 border-gray-500 rounded mb-3">
              <span className="ml-2 font-bold uppercase">Description:</span>{" "}
            </span>

            <span className="text-[#757575] font-semibold">{details}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

{
  /* <div className="leading-7">
  <h2 className="border-s-4 border-pink-500 rounded mb-3">
    <span className="ml-2 font-bold">Name:</span>{" "}
    <span className="text-[#757575] font-semibold">{name}</span>
  </h2>
  <p className="w-[500px] mb-3">
    <span className="font-bold border-s-4 border-pink-500 rounded">
      {" "}
      <span className="ml-2">Description:</span>{" "}
    </span>{" "}
    <span className="text-[#757575] font-semibold">{description}</span>
  </p>
  <p className="border-s-4 border-pink-500 rounded mb-3">
    <span className="ml-2 font-bold">
      Likes: <span className="text-[#757575] font-semibold">{likes}</span>{" "}
    </span>
  </p>
  <p className="border-s-4  border-pink-500 rounded mb-3">
    <span className="ml-2 font-bold">Number Of Recipes:</span>{" "}
    <span className="text-[#757575] font-semibold">{recipes}</span>
  </p>
  <p className="border-s-4 border-pink-500 rounded">
    <span className="ml-2 font-bold">Years Of Experience: </span>
    <span className="text-[#757575] font-semibold">{experience}</span>
  </p>
</div>; */
}
