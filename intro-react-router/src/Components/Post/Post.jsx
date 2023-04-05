import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({posts}) => {
    return (
        <div className='border-2  border-red-500 p-4 bg-slate-200'>
            <h1>Title : {posts.title}</h1>
            <h4>Body : {posts.body}</h4>
            <p> <Link to={`/postDetails/${posts.id}`} >Details</Link> </p>
            {/* "/postDetails/:postId", */}
        </div>
    );
};

export default Post;