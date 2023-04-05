import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name , email , address , website , phone , id} = friend ;
    return (
        <div className='bg-red-200 p-4'>
            <h2>Name : {name}</h2>
            <h4>Email : {email}</h4>
            <h4>Website : {website}</h4>
            <h4>Phone : {phone}</h4>
            <p> <Link to={`/friendDetails/${id}`}> Details</Link> </p>
        </div>
    );
};

export default Friend;