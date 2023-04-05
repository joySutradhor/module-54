import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const allPosts = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-5 mx-4'>
            {
                allPosts.map(post => <Post
                
                key={post.id}
                posts = {post}
                
                ></Post>)
            }
        </div>
    );
};

export default Posts;