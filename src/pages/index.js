import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/HeroSection';
import Info from '../components/Planetinfo';


const IndexPage = () => {
    return(
        <Layout>
            <Hero />
            <Info />
        </Layout>
    )
}

export default IndexPage;
