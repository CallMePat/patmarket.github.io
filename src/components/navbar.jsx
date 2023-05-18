import React from "react";
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => { 
    return (
        
            <div className="navbar">

                <div className="logo">
                    <Link to="/">
                        Pat Market
                    </Link>
                </div>

                <div className="links">

                    <Link to="/cart">
                        <ShoppingCart size={30} />
                    </Link>

                    <Link to="/profile">
                        <User size={30} />
                    </Link>
                </div>




            </div>
    
    );
};