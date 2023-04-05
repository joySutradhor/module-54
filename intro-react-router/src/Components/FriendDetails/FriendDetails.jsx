import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div>
            <h1>Friend Details is here </h1>
        </div>
    );
};

export default FriendDetails;