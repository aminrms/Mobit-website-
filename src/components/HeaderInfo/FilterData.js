import React, { useEffect, useState } from 'react';
import axios from 'axios'
const FilterData = () => {
    const [searchItem , setSearchItem] = useState('');
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
            .then(res => )
    })
    return (
        <div>
            
        </div>
    );
};

export default FilterData;