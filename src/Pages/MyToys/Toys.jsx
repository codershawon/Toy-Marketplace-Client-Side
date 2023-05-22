import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Toys = ({ toys }) => {
  const [toy, setToy] = useState([]);
  const {
    _id,
    sellerName,
    email,
    name,
    subCategory,
    price,
    quantity,
    image,
    ratings,
    details,
  } = toys;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-side-five.vercel.app/newToySuperHero/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
          const remaining = toys.filter((toy) => toy._id !== _id);
          setToy(remaining);
      }
    });
  };
  return (
    <tr className="text-gray-300 font-bold">
      <td>
        <img className="h-20 w-20 rounded-lg" src={image} alt="" />
      </td>
      <td>{sellerName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{ratings}</td>
      <td>{details}</td>
      <td>
        <Link to={`/updatedToys/${_id}`}>
          <button className="bg-gray-500 p-5 rounded-lg">Update</button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-gray-500 p-5 rounded-lg"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Toys;
