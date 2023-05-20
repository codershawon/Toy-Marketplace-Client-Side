import React from 'react';
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from 'react-router-dom';
const Transformers = ({transformer}) => {
    const { image, name, rating, _id, price } = transformer;
    return (
        <div className="card card-side bg-gray-300 w-[650px] shadow-xl">
        <figure>
          <img className="h-[350px] w-[350px]" src={image} alt="Movie" />
        </figure>
        <div className="card-body w-96 text-left">
          <h2 className="card-title mt-14 text-2xl font-bold text-gray-600">Toy Name: {name}</h2>
          <p className="text-xl text-gray-600 font-semibold">Price: {price}</p>
          <div className="flex justify-center items-center">
            <p className="text-xl text-gray-600 font-bold">Ratings: </p>
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={rating}
                readOnly
              />
            </p>
          </div>
          <div className="card-actions justify-end">
           <Link to={`/toyDetails/${_id}`}> <button className="btn btn-primary mt-3">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Transformers;