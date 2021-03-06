import React from 'react';
import About from './About/About';
import Blog from './Blog/Blog';
import Hero from './Hero/Hero';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Blog/>
        </div>
    );
};

export default Home;