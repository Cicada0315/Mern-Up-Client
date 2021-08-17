import React from 'react';
import {Button} from 'react-bootstrap';
import { deletePost, likePost } from '../../../actions/postsAction'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ThumbsUp from '../../../images/ThumbsUp.png'
import Edit from '../../../images/edit.png'
import Delete from '../../../images/Delete.ico'

const Post=(props)=>{
    const dispatch=useDispatch();
    const history= useHistory();
    const userinfo= JSON.parse(localStorage.getItem('userinfo'));
    const { id } = useParams();
    const posts = useSelector((state) => state.posts);
    const post=posts.find(p=> p._id===id);

    const handleEdit=()=>{
        props.setCurrentPostId(post._id);
        history.push(`/posts/${post._id}/edit`);
    }

    const handleLike=()=>{
        if(userinfo){
            props.setCurrentPostId(post._id);
            dispatch(likePost(post._id, {...post, likes: [...post.likes, userinfo.result._id] }));
        }else{
            alert("You have to singin to like this post")
        }
        
    }
    
    const handleDelete=()=>{
        dispatch(deletePost(post._id));
        history.push("/posts");
    }


    return (
        !post? <div className="bg-light">The Post doesn't exist</div>:
        <div className="bg-light" style={{padding: "15px"}}>
            {(userinfo && userinfo.result._id === post.creator) &&
                (<div style={{textAlign: "right"}}><Button variant="outline-primary" onClick={handleEdit}><img src={Edit} width="20" height="20" alt="edit"/>Edit</Button>
            <Button variant="outline-primary" onClick={handleDelete}><img src={Delete} width="20" height="20" alt="delete"/>Delete</Button></div>)}
            <h4>{post.name}</h4>   
            <h1>{post.title}</h1>
            <p className="text-muted">{post.createdAt.split("T")[0]}  Views {post.views}</p>

            <img src={post.files} alt="file" className="img-fluid"/>
            <p>{post.content}</p>
            
            <Button variant="light" onClick={handleLike}><img src={ThumbsUp} width="15" height="15" alt="like"/>{post.likes.length}{" "}</Button>
            <br/>
            <Button variant="outline-primary" onClick={()=> history.push("/posts")}>Back</Button>
        </div>
    )

}

export default Post;