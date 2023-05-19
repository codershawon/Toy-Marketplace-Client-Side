import React from "react";

const Toys = ({ toys }) => {
  const { _id, sellerName, toyName, subCategory, price, quantity } = toys;
  return (
    <div>
      <div className="flex justify-between w-[1350px] mx-auto leading-loose mb-8 text-gray-600 font-bold">
        <h5 className="ml-24 text-center">{sellerName}</h5>
        <h5 className="ml-6 text-center">{toyName}</h5>
        <h5 className="ml-6 text-center">{subCategory}</h5>
        <h5 className="text-center">{price}</h5>
        <h5 className="text-center">{quantity}</h5>
        <button className="btn btn-outline">View Details</button>
      </div>
      
    </div>
  );
};

export default Toys;
