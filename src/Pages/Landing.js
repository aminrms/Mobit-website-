import React, { Component } from 'react';
import Banner from '../components/Banner';
import BannerImages from "../../src/components/BannerInfo/BannerImages";
import RecommendSection from '../components/RecommendSection';
import MostViewSection from '../components/mostViewSection';
import Brands from '../components/Brands';
import BigImageSection from '../components/BigImageSection';
import MostSellThingsSection from '../components/MostSellThingsSection';
import TwoImageSection from '../components/TwoImageSection';
import PowerBank from '../components/PowerBank';
import Phone from '../components/Phone';
import FourImage from '../components/FourImage';
import TechnologyNews from '../components/TechnologyNews';
import NewProducts from '../components/NewProducts';
import Promotion from './Promotion';

class Landing extends Component {
    render() {
        return (
          <>
            <Banner slide={BannerImages} />
            <RecommendSection/>
            <MostViewSection/>
            <Brands/>
            <BigImageSection/>
            <MostSellThingsSection/>
            <TwoImageSection/>
            <PowerBank/>
            <Phone/>
            <FourImage/>
            <TechnologyNews/>
            <NewProducts/>
            
          </>
        );
    }
}

export default Landing;