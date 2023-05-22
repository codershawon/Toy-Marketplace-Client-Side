import React from "react";
import useTitle from "../../../hooks/useTitle";

const AboutUs = () => {
  useTitle("About Us")
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="w-[640px] lg:w-[1350px] mx-auto ml-4 lg:ml-96">
          <h2 className="text-4xl font-bold mb-8 text-left lg:text-center text-gray-800 uppercase"><span className="text-amber-900 font-bold">About</span> Us</h2>
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-[#757575] font-semibold mb-6 w-80 lg:w-[600px]">
                At Superhero Toys, our mission is to bring the excitement of
                superheroes to fans of all ages. We are passionate about
                providing the best selection of superhero toys and delivering an
                exceptional shopping experience to our customers.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Our Passion for Superheroes
              </h3>
              <p className="text-[#757575] font-semibold  mb-6 w-80 lg:w-[600px]">
                Superheroes have always been a source of inspiration and
                imagination. Our love for superheroes drives us to curate a wide
                range of high-quality toys featuring iconic characters and
                beloved franchises.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Quality and Authenticity
              </h3>
              <p className="text-[#757575] font-semibold  mb-6 w-80 lg:w-[600px]">
                We are committed to providing our customers with genuine and
                authentic superhero toys. We work directly with reputable
                manufacturers and licensors to ensure the highest quality and
                authenticity of every product we offer.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 w-80">
                Exceptional Customer Service
              </h3>
              <p className="text-[#757575] font-semibold  mb-6 w-80 lg:w-[600px]">
                Our customers are our top priority, and we strive to provide
                exceptional customer service. Our friendly and knowledgeable
                support team is available to assist you with any inquiries or
                concerns you may have.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="md:w-1/2 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                alt="About Us"
                className="w-[500px] lg:w-[800px] h-[400px] rounded-md -ml-40  lg:ml-0"
              />
            </div>
            <div className="md:w-1/2 md:order-1 md:pr-8 mt-10 lg:-mt-10 -ml-72 lg:ml-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 w-80 lg:w-full">
                Trusted by Superhero Fans Worldwide
              </h3>
              <p className="text-[#757575] font-semibold mb-6 w-80 lg:w-[600px]">
                We take pride in being the go-to destination for superhero
                enthusiasts around the globe. Our dedication to quality,
                authenticity, and customer satisfaction has earned us the trust
                and loyalty of superhero fans worldwide.
              </p>
              <p className="text-[#757575] font-semibold w-80 lg:w-[600px]">
                Have a question or need assistance? Contact us at{" "}
                <a
                  href="mailto:info@superherotoys.com"
                  className="text-blue-500 underline"
                >
                  info@superherotoys.com
                </a>{" "}
                or call us at{" "}
                <span className="font-semibold">123-456-7890</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
