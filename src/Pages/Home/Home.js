import React from 'react';
import FeatureBook from '../FeaturedBook/FeatureBook';
import Categories from './Categories/Categories';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Categories></Categories>
            <FeatureBook></FeatureBook>
        </div>
    );
};

export default Home;