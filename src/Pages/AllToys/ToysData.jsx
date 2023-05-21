import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
const ToysData = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (user) {
      navigate(`/toyDetails/${_id}`);
    } else {
      alert('You have to log in first to view details');
      navigate('/login');
    }
  };
  const { _id, sellerName, name, subCategory, price, quantity } = toy;
  return (
    <tr className="text-gray-300 font-bold">
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        {user ? (
          <Link to={`/toyDetails/${_id}`}>
            <button className="bg-gray-500 p-5 rounded-lg">View Details</button>
          </Link>
        ) : (
          <>
            <button className="bg-gray-500 p-5 rounded-lg" onClick={handleViewDetails}>
              View Details
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default ToysData;
