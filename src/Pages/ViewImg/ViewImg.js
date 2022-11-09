import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewImg = () => {
    const{img}=useLoaderData()
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default ViewImg;