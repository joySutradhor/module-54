import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"  ;
import ActiveLInk from '../ActiveLInk/ActiveLInk';

const Header = () => {
    return (
        <nav className='text-red-400'>
            <ActiveLInk to = "/">Home</ActiveLInk>
            <ActiveLInk to = "/contact">Contact</ActiveLInk>
            <ActiveLInk to = "/about">About</ActiveLInk>
            <ActiveLInk to = "/friends">Friends</ActiveLInk>
            <ActiveLInk to = "/posts">Posts</ActiveLInk>
            <ActiveLInk to = "/blog">blog</ActiveLInk>
        </nav>
    );
};

export default Header;