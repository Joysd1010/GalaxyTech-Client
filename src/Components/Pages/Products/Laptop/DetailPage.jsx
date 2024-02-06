import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailPage = () => {
const laptop=useLoaderData()
console.log(laptop)

    return (
        <div>
            this is detailpage
            
        </div>
    );
};

export default DetailPage;