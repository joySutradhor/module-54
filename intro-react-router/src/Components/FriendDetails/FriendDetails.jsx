import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const details = useLoaderData() ;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className='mx-auto w-[300px] my-5 bg-green-300 p-5'>
            <h1>ID : {details.id}</h1>
            <h1>Name : {details.name}</h1>
            <h4>Email : {details.email}</h4>
            <button onClick={handleBack} className='bg-green-100 p-2' > Back </button>
        </div>
    );
};

export default FriendDetails;