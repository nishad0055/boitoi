import React from 'react';
import FeatureBook from '../FeaturedBook/FeatureBook';
import RecentProduct from '../RecentProduct/RecentProduct';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <FeatureBook></FeatureBook>
            <RecentProduct></RecentProduct>
        </div>
    );
};

export default Home;