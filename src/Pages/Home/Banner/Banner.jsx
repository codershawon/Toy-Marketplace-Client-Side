import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../../hooks/useTitle";
const Banner = () => {
  useTitle("Banner")
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 w-full justify-center items-center gap-44 mx-auto -mt-4 ">
     <div className="w-[1400px] flex flex-col lg:flex-row items-center">
     <div className="w-[600px] -ml-10">
        <h1 className="text-2xl lg:text-5xl font-bold ml-36 lg:ml-8 text-purple-400 uppercase w-80 lg:w-[650px] leading-tight" data-aos="fade-up" data-aos-duration="2000">Welcome to Superhero Toy Kingdom</h1>
        <p className="mt-5 text-xl ml-36 lg:ml-8 leading-relaxed w-80 lg:w-[600px] text-gray-500 font-semibold" data-aos="fade-up" data-aos-duration="2000">
          Unleash your imagination and embark on extraordinary adventures with
          our vast collection of superhero toys. From action figures to
          costumes, we have everything you need to become your favorite
          superhero. Discover the thrill of saving the world and let your inner
          hero shine at Superhero Toy Kingdom. Shop now and experience the magic
          of playtime like never before.
          <div className="flex gap-4 mt-4">
          <button className="btn btn-primary w-40 ">Shop Now</button>
          <button className="btn btn-warning text-white">Explore Collection</button>
          </div>
        </p>
      </div>
      <img className=" w-[350px] lg:w-[1400px] h-96 lg:h-[600px] ml-3  lg:ml-52 mt-6 lg:mt-0" data-aos="fade-up" data-aos-duration="2000" src="https://images.unsplash.com/photo-1556707752-481d500a2c58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
     </div>
    </div>
  );
};

export default Banner;