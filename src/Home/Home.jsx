import React from 'react';
import Banner from './Banner/Banner';
import Sectionone from './Sectionone/Sectionone';
import Cards from './Cards/Cards';
import Cardstwo from './Cards/Cardstwo';
import Footer from './Footer/Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sectionone></Sectionone>
            <Cards></Cards>
            <Cardstwo></Cardstwo>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;