import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name , email , address , website , phone , id} = friend ;
    const navigate = useNavigate();
    const handleNavigate =() => {
        navigate (`/friendDetails/${id}`)
    }
    return (
        <div className='bg-red-200 p-4'>
            <h2>Name : {name}</h2>
            <h4>Email : {email}</h4>
            <h4>Website : {website}</h4>
            <h4>Phone : {phone}</h4>
            <p> <Link to={`/friendDetails/${id}`}> Details</Link> </p>
            <button onClick={handleNavigate} className='bg-green-400 p-2 rounded-sm my-3'>Details Btn </button>
        </div>
    );
};

export default Friend;