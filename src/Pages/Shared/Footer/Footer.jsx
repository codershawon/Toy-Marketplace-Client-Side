import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div className='-mt-7'>
          <img className='w-16 h-24' src="https://i.ibb.co/JF1LFrJ/photo-1590341328520-63256eb32bc3-removebg-preview-1.png"  alt="" />
          <p>Superhero Toy Kingdom<br/>Explore a world of superhero toys</p>
          <p>Copyright © 2023 - All right reserved</p>
          <div className='flex gap-4'>
          <a href="/facebook"><FaFacebookF className='bg-gray-500 text-white h-7 w-7 px-2 rounded-full'/></a>
          <a href="/youtube"><FaYoutube className='bg-gray-500 text-white h-7 w-7 px-2 rounded-full'/></a>
          <a href="/twitter"> <FaTwitter className='bg-gray-500 text-white h-7 w-7 px-2 rounded-full'/></a>
          </div>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Shop</a> 
          <a className="link link-hover">Collections</a> 
          <a className="link link-hover">Deals</a> 
          <a className="link link-hover">Gifts</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Careers</a> 
          <a className="link link-hover">Press</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of Use</a> 
          <a className="link link-hover">Privacy Policy</a> 
          <a className="link link-hover">Cookie Policy</a>
        </div>
      </footer>
      
    );
};

export default Footer;
