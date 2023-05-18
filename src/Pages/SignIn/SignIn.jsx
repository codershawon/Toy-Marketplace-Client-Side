import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css"
const SignIn = () => {
  return (
    <div className="border border-gray-400 rounded-lg w-[650px] h-[600px] mx-auto mb-9">
      <form>
      <h1 className="text-center text-3xl font-bold mt-6">Login</h1>
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
        <button className="btn text-white w-[500px] ml-16 mt-8">Sign In</button>
        <p className="text-center mt-3">Or Sign In With</p>
        <button className="googleBtn flex justify-center items-center ml-16  w-[500px] p-2 mt-8">
          <img
            className="w-[32px] h-[32px] mr-2"
            src="https://i.ibb.co/ngm3bhN/google-logo-9808.png"
            alt=""
          />
          <span>Continue With Google</span>
        </button>
        <p className="text-center mt-3">New to SuperHero Toy Kingdom? <Link to="/signUp"><span className="text-[#ff3811] font-bold">Sign Up</span></Link></p>
      </form>
    </div>
  );
};

export default SignIn;
