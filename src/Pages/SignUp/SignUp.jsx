import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../hooks/useTitle";
const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser} = useContext(AuthContext);
  useTitle("SignUp")
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    console.log(user);
    if (password !== confirmPassword) {
      setError(
        toast.error(
          "Your password didn't match. Please provide password exactly"
        )
      );
      return;
    } else if (password.length < 6) {
      setError(
        toast.error(
          "Your password length is less than 6 character. Please provide password more than 6 character"
        )
      );
      return;
    }
    createUser(email,password).then(result=>{
        const loggedUser=result.user
        console.log(loggedUser)
        form.reset()
        setSuccess(
            toast.success("Your registration in SuperHero Toy Kingdom is Successful")
        )
    }).catch(()=>{
        setError(toast.error("Your registration in SuperHero Toy Kingdom is Unsuccessful"))
    })
  };
  return (
    <div className="border border-gray-400 rounded-lg w-[650px] h-[800px] mx-auto mb-9">
      <form onSubmit={handleSignUp}>
        <h1 className="text-center text-3xl font-bold mt-6">Sign Up</h1>
        <p className="text-center mt-2">
          Create your account. It's free and only takes a minute
        </p>
        <div className="flex gap-4 ml-16 mt-8">
          <div>
            <h5 className="font-semibold mb-2">First Name</h5>
            <input
              className="bg-gray-300 rounded-lg w-60 h-10 pl-3"
              type="text"
              name="firstName"
              id=""
              placeholder="Your First Name"
              required
            />
          </div>
          <div>
            <h5 className="font-semibold mb-2">Last Name</h5>
            <input
              className="bg-gray-300 rounded-lg w-60 h-10 pl-3"
              type="text"
              name="lastName"
              id=""
              placeholder="Your Last Name"
              required
            />
          </div>
        </div>
        <div className="ml-16 mt-8">
          <h5 className="font-semibold mb-2">Email</h5>
          <input
            className="bg-gray-300 rounded-lg w-[500px] h-10 pl-3"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
        </div>
        <div className="ml-16 mt-8">
          <h5 className="font-semibold mb-2">Password</h5>
          <input
            className="bg-gray-300 rounded-lg w-[500px] h-10 pl-3"
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            required
          />
        </div>
        <div className="ml-16 mt-8">
          <h5 className="font-semibold mb-2">Confirm Password</h5>
          <input
            className="bg-gray-300 rounded-lg w-[500px] h-10 pl-3"
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Your Confirm Password"
            required
          />
        </div>
        <button className="btn text-white w-[500px] ml-16 mt-8">Sign Up</button>
        <p className="text-center mt-3">Or Sign Up With</p>
        <button className="googleBtn flex justify-center items-center ml-16  w-[500px] p-2 mt-8">
          <img
            className="w-[32px] h-[32px] mr-2"
            src="https://i.ibb.co/ngm3bhN/google-logo-9808.png"
            alt=""
          />
          <span>Continue With Google</span>
        </button>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-[#ff3811] font-bold">Sign In</span>
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
