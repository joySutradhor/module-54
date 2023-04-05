import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Contact = () => {
   const test = useLoaderData();

   console.log(test) ;
    return (
        <div>
            <h1>im form contact componet {test.length}</h1>

        </div>
    );
};

export default Contact;