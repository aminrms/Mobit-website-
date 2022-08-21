import React, { Component } from 'react';
import MostSellSectionData from './MostSellSectionInfo/MostSellData';
import SliderComponent from './sliderComponent';
class MostSellThingsSection extends Component {
    render() {
        return (
            <>
                <SliderComponent link={'/mostSell'} data={MostSellSectionData} title={'پرفروش ترین ها'} seePart={'مشاهده همه'}/>
            </>
        );
    }
}

export default MostSellThingsSection;