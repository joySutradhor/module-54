import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const load = useNavigation();
    return (
        <div>
            <Header></Header>
            <p>{load.state === 'loading' && 'text loading'}</p>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;