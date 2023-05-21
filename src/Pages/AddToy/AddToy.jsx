import React, { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/Ri";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
const AddToy = () => {
    const {user}=useContext(AuthContext)
  const [selectedItem, setSelectedItem] = useState("");
  useTitle("Add Toy")
  const handleAddToy=e=>{
    e.preventDefault()
    const form=e.target;
    const image=form.image.value;
    const name=form.name.value;
    const sellerName=form.sellerName.value;
    const email=form.email.value;
    const subCategory=form.category.value;
    const price=form.price.value;
    const ratings=form.ratings.value;
    const quantity=form.quantity.value;
    const details=form.details.value;
    const userDetails={
      image,name,sellerName,email,subCategory,price,ratings,quantity,details
    }
    console.log(userDetails)
    fetch(`https://toy-marketplace-server-side-five.vercel.app/newToySuperHero`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userDetails)
    }).then(res=>res.json()).then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Add Toy Successful',
                showConfirmButton: false,
                timer: 1500
              })
        }
        form.reset()
    })
  }
  const handleInputChange = (e) => {
    setSelectedItem(e.target.value);
    document.getElementById("category").value = e.target.value;
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
    document.getElementById("category").value = item;
    const inputField = document.getElementById("category");
    console.log("inputField:", inputField);
  };

  return (
    <div className="bg-[#f3f3f3] rounded-lg h-[800px] w-[800px] mx-auto mb-6">
      <h1 className="text-center text-3xl font-bold pt-6 uppercase">Add A Toy</h1>
      <form onSubmit={handleAddToy}>
        <div className="flex justify-center pt-16 gap-5">
          <div>
            <h1>Image URL</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="image"
              id=""
              placeholder="Image URL"
              required
            />
          </div>
          <div>
            <h1>Toy Name</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="toyName"
              id=""
              placeholder="Toy Name"
              required
            />
          </div>
        </div>
        <div className="flex justify-center pt-8 gap-5">
          <div>
            <h1>Seller Name</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="sellerName"
              id=""
              placeholder="Seller Name"
              required
            />
          </div>
          <div>
            <h1>Seller Email</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="email"
              name="email"
              id=""
              placeholder="Seller Email"
              required
            />
          </div>
        </div>
        <div className="flex justify-center pt-8 gap-3">
          <div>
            <h1>Sub-category</h1>
            <input
              id="category"
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="category"
              placeholder="Marvel Toys"
              value={selectedItem || ""}
              onChange={handleInputChange}
              required
            />
            <div className="dropdown dropdown-hover relative right-5">
              <RiArrowDropDownLine />
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-slate-100 rounded-box w-52"
              >
                <li>
                  <button
                    onClick={() => handleDropdownItemClick("Marvel Toys")}
                  >
                    Marvel Toys
                  </button>
                </li>
                <li>
                  <button onClick={() => handleDropdownItemClick("DC Toys")}>
                    DC Toys
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDropdownItemClick("Star War Toys")}
                  >
                    Star War Toys
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDropdownItemClick("Transformers Toys")}
                  >
                    Transformers Toys
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Toy Price</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="price"
              id=""
              placeholder="Toy Price"
              required
            />
          </div>
        </div>
        <div className="flex justify-center pt-8 gap-5">
          <div>
            <h1>Ratings</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="text"
              name="ratings"
              id=""
              placeholder="Ratings"
              required
            />
          </div>
          <div>
            <h1>Available Quantity</h1>
            <input
              className="bg-gray-300 w-[350px] h-[50px] rounded-lg pl-3"
              type="number"
              name="quantity"
              id=""
              placeholder="Available Quantity"
              required
            />
          </div>
        </div>
        <div className="ml-10 pt-8">
          <h1>Details</h1>
          <textarea
            className="bg-gray-300 w-[720px] h-[150px] rounded-lg pl-3 pt-3"
            name="details"
            id=""
            cols="30"
            rows="10"
            placeholder="Details"
            required
          ></textarea>
        </div>
        <button className="btn btn-active w-[720px] ml-10 mt-2">Add Toy</button>
      </form>
    </div>
  );
};

export default AddToy;
