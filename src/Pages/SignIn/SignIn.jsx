import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css"
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../../hooks/useTitle";
const SignIn = () => {
    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")
    const{signInUser,signInWithGoogle}=useContext(AuthContext)
    const Navigate = useNavigate();
    useTitle("Login")
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn=()=>{
        signInWithGoogle().then(result=>{
            const user=result.user;
            console.log(user)
            setSuccess(toast.success("Sign In with google Successful"))
            Navigate(from, { replace: true });
        }).catch(error=>{
            setError(toast.error("Sign In with google unsuccessful.Please try again!!"))
        })
    }
    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={
            email,password
        }
        console.log(user)
        signInUser(email,password).then(result=>{
            const loggedUser=result.user
            console.log(loggedUser)
            form.reset()
            setSuccess(
                toast.success("You are successfully sign in SuperHero Toy Kingdom")
            )
            Navigate(from, { replace: true });
        }).catch(error=>{
            setError(
                toast.error("You'r sign In SuperHero Toy Kingdom unsuccessful")
            )
        })
    }
  return (
    <div className="border border-gray-400 rounded-lg w-[650px] h-[600px] mx-auto mb-9">
      <form onSubmit={handleLogin}>
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
        <button onClick={handleGoogleSignIn} className="googleBtn flex justify-center items-center ml-16  w-[500px] p-2 mt-8">
          <img
            className="w-[32px] h-[32px] mr-2"
            src="https://i.ibb.co/ngm3bhN/google-logo-9808.png"
            alt=""
          />
          <span>Continue With Google</span>
        </button>
        <p className="text-center mt-3">New to SuperHero Toy Kingdom? <Link to="/signUp"><span className="text-[#ff3811] font-bold">Sign Up</span></Link></p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default SignIn;
