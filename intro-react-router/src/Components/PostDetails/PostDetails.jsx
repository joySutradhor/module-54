import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData() ;
    console.log(details) ;
    return (
        <div className='border-2 border-red-300  w-[350px] mx-auto p-4 my-5'>
            <h2>ID : {details.id}</h2>
            <p>Body : {details.body}</p>
        </div>
    );
};

export default PostDetails;