import React from 'react';
import "./Products.css";

const Product = ({ product }) => {

    const { img, name, available } = product;

    return (
        <div className="card card-side h-52 w-80 bg-base-100 shadow-xl mb-12">
            <div className="card-body">
                <h2 className="text-2xl font-bold mt-5 mb-8">{name}</h2>
                <button className='button'>{available}+ Products</button>
            </div>
            <figure><img className='w-40' src={img} alt="Movie" /></figure>
        </div>
    );
};

export default Product;