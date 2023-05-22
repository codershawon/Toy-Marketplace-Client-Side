import React from "react";
import useTitle from "../../../hooks/useTitle";
const Gallery = () => {
  useTitle("Gallery")
  return (
    <div>
      <h1 className="text-left lg:text-center text-4xl w-full font-bold mt-20 ml-7 lg:ml-20  mb-8 text-amber-700">
        Explore Our Superhero Toy Collection
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[350px] lg:w-[1360px] mx-auto gap-3 ml-7 lg:ml-60 ">
      <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
          <img
            className="w-[500px] h-[500px] object-cover"
            src="https://i.ibb.co/PC5HZS7/photo-1531259683007-016a7b628fc3.jpg"
            alt=""
          />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/0CpM3CS/photo-1608889335941-32ac5f2041b9.jpg"
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/3FshMMN/photo-1545548226-5fce973bef90.jpg" 
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/YpTPGz3/photo-1542623024-a797a755b8d0.jpg"
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/Xkw5p7z/photo-1557985594-29f3ad9f5134.jpg"
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/KXP8gms/photo-1559535332-db9971090158.jpg"
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/rtMJfN4/photo-1636840438199-9125cd03c3b0.jpg"
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/GVMwrFS/photo-1658233427331-088df3be7ad5.jpg"
          alt=""
        />
        </div>
        <div className="rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
        <img  className="rounded-lg w-[500px] h-[500px]"
          src="https://i.ibb.co/vkxgqwy/photo-1558679908-541bcf1249ff.jpg"
          alt=""
        />
        </div>
      </div>
      </div>
  );
};

export default Gallery;
// className=' mx-36 mb-10 w-[640px] lg:w-auto ml-14 lg:ml-40 grid lg:grid-cols-3'