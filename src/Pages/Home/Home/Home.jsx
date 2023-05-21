import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import SellerReview from '../SellerReview/SellerReview';
import AboutUs from '../AboutUs/AboutUs';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <SellerReview></SellerReview>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;