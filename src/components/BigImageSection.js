import React, { Component } from 'react';
import Images from './ImageComponent/Images';
import Hoawai from "../images/Hoawai.jpg";
class BigImageSection extends Component {
    render() {
        return (
            <>
                <Images src={Hoawai} alt={'بنر هوآوی'} />
            </>
        );
    }
}

export default BigImageSection;