import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const SellerReview = () => {
  return (
    <div className="w-[1220px] mx-auto mb-6 mt-10 ">
      <h1 className="text-3xl font-bold text-center mt-6 mb-8 uppercase">
        Seller's <span className="text-amber-900 font-extrabold">Review</span>
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <div className="card w-[600px] bg-gray-200 mx-auto ">
          <div className="card-body items-center text-center">
            <img
              className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={5}
                readOnly
              />
            </p>
            <div className="card-actions justify-end">
              <p className="w-[550px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40">
                <span className="font-bold text-5xl text-pink-500">“</span>I
                recently purchased a Marvel action figure from this website, and
                I couldn't be happier with my experience. The seller provided
                excellent customer service, promptly answered my questions, and
                the toy arrived in perfect condition. Highly recommended!
                <br></br>
                <span className="ml-96 mt-10">
                  {" "}
                  -John D
                  <span className="font-bold text-5xl text-pink-500">“</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[600px] bg-gray-200 mx-auto ">
          <div className="card-body items-center text-center">
            <img
              className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={4.9}
                readOnly
              />
            </p>
            <div className="card-actions justify-end">
              <p className="w-[550px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40">
                <span className="font-bold text-5xl text-pink-500">“</span>I'm a
                parent who wanted to surprise my son with some superhero toys
                for his birthday. I stumbled upon this website and decided to
                give it a try. The seller I purchased from was incredibly
                helpful and guided me through the process. The toys arrived on
                time, and my son absolutely loves them! Thank you for making his
                day special!<br></br>
                <span className="ml-96 mt-10">
                  {" "}
                  -Mark R
                  <span className="font-bold text-5xl text-pink-500">“</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[600px] bg-gray-200 mx-auto ">
          <div className="card-body items-center text-center">
            <img
              className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={4.8}
                readOnly
              />
            </p>
            <div className="card-actions justify-end">
              <p className="w-[550px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40">
                <span className="font-bold text-5xl text-pink-500">“</span>I
                recently had a fantastic experience with a seller on this
                platform. I ordered a Batman playset, and the seller provided
                detailed information about the product, including its features
                and dimensions. The toy arrived securely packaged, and the
                quality is outstanding. The seller's professionalism and
                attention to detail made the buying process a breeze.<br></br>
                <span className="ml-96 mt-10">
                  {" "}
                  -David L
                  <span className="font-bold text-5xl text-pink-500">“</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[600px] bg-gray-200 mx-auto ">
          <div className="card-body items-center text-center">
            <img
              className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={4.9}
                readOnly
              />
            </p>
            <div className="card-actions justify-end">
              <p className="w-[550px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40">
                <span className="font-bold text-5xl text-pink-500">“</span>I've
                been collecting superhero toys for years, and this website has
                become my go-to source. The sellers on this platform are
                reliable and trustworthy. I've purchased multiple items, and
                each time the delivery has been quick and the products have
                exceeded my expectations. A fantastic place for any superhero
                toy enthusiast!<br></br>
                <span className="ml-96 mt-10">
                  {" "}
                  -Sarah K
                  <span className="font-bold text-5xl text-pink-500">“</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[600px] bg-gray-200 mx-auto ">
          <div className="card-body items-center text-center">
            <img
              className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={4.7}
                readOnly
              />
            </p>
            <div className="card-actions justify-end">
              <p className="w-[550px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40">
                <span className="font-bold text-5xl text-pink-500">“</span>As a
                collector, I'm always on the lookout for unique and
                limited-edition superhero toys. The sellers on this website
                consistently offer rare items and exclusives that I can't find
                elsewhere. The packaging was carefully done, and the condition
                of the toys was excellent. I'm extremely satisfied with my
                purchases!<br></br>
                <span className="ml-96 mt-10">
                  {" "}
                  -Emily S
                  <span className="font-bold text-5xl text-pink-500">“</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[600px] bg-gray-200 mx-auto ">
          <div className="card-body items-center text-center">
            <img
              className="h-24 w-24 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <p>
              <Rating
                className="mx-auto"
                style={{ maxWidth: 120 }}
                value={4.7}
                readOnly
              />
            </p>
            <div className="card-actions justify-end">
              <p className="w-[550px] lg:w-[480px] mx-40  text-[#757575] font-semibold ml-12 lg:ml-40">
                <span className="font-bold text-5xl text-pink-500">“</span>I'm
                new to collecting superhero toys, and I had some doubts before
                making my first purchase. The seller I interacted with was
                incredibly patient and answered all my questions promptly. They
                even provided recommendations based on my interests. I received
                my order promptly, and the toy exceeded my expectations. The
                seller's expertise and dedication made my experience enjoyable
                and stress-free<br></br>
                <span className="ml-96 mt-10">
                  {" "}
                  -Olivia M
                  <span className="font-bold text-5xl text-pink-500">“</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerReview;
