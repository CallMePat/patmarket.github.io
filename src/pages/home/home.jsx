import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import './home.css';
import { Link } from 'react-router-dom';





export const Home = () => {
    return (
        <div className='home'>
            <div>
                <h1>
                    Your order at your door step in minutes.
                </h1>
                <p>Shop from your favourites local stores around you.</p>
                <div className='search'>
                    <form>
                        <MagnifyingGlass className='search-img' />
                        <input type="text" className='input' placeholder='Find stores, products and more...' />
                    </form>
                </div>

            </div>
            <div className='cardss'>
                <div class="container text-center">
                    <div class="row">
                        <div class="col order-first">
                            <Link to="/shop1">
                                <img src='/images/img1.png' class="card-img-top" alt="" />
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="/shop2">
                                <img src='/images/img2.png' class="card-img-top" alt="" />
                            </Link>
                        </div>
                        <div class="col order-last">
                            <Link to="/shop3">
                                <img src='/images/img3.png' class="card-img-top" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardss'>
                <div class="container text-center">
                    <div class="row">
                        <div class="col order-first">
                            <Link to="/shop4">
                                <img src='/images/img4.png' class="card-img-top" alt="" />
                            </Link>
                        </div>
                        <div class="col">
                            <Link to="/shop5">
                                <img src='/images/img5.png' class="card-img-top" alt="" />
                            </Link>
                        </div>
                        <div class="col order-last">
                            <Link to="/shop6">
                                <img src='/images/img6.png' class="card-img-top" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='cardss'>

            </div>

        </div >
    );
};