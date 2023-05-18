import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import {Product} from './product'
import "./shop.css";


export const Shop1 = () => {
    return <div className='shop'>
        
        <div className="links">
                <Link to="/shop1">
                    <div className='shopTitle'>
                        <h1>Fast Food & Restaurant</h1>
                    </div>
                    <div className='product'>
                        {PRODUCTS.map((product) => (
                        <Product data={product} />
                        ))}

                    </div>
                </Link>

            </div>

    </div>
};