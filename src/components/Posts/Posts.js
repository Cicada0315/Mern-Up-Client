import React from 'react';
import PostCard from './Post/PostCard';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const Posts = (props) => {
    const posts = useSelector((state) => state.posts);
    return (
        !posts.length ? 
        <div className="bg-light">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>:
        <div className="bg-light">
            {posts.map(p=><><PostCard key={p._id} post={p} currentPostId={props.currentPostId} setCurrentPostId={props.setCurrentPostId}/></>)}
        </div>
    );
};
  
export default Posts;