import React from "react";
const Banner = () => {
  return (
    <div className="flex justify-around items-center mx-auto">
      <div className="w-[600px]">
        <h1 className="text-5xl font-bold ml-8 text-purple-400 uppercase w-[650px] leading-tight">Welcome to Superhero Toy Kingdom!</h1>
        <p className="mt-5 text-xl ml-8 leading-8 text-gray-500 font-semibold">
          Unleash your imagination and embark on extraordinary adventures with
          our vast collection of superhero toys. From action figures to
          costumes, we have everything you need to become your favorite
          superhero. Discover the thrill of saving the world and let your inner
          hero shine at Superhero Toy Kingdom. Shop now and experience the magic
          of playtime like never before!
          <div className="flex gap-4 mt-4">
          <button className="btn btn-primary w-40 ">Shop Now</button>
          <button className="btn btn-warning text-white">Explore Collection</button>
          </div>
        </p>
      </div>
      <img src="https://i.ibb.co/9y60dQ0/0-sua5-XRCq-MWr-Znd-KN-removebg-preview.png" alt="" />
    </div>
  );
};

export default Banner;
 