import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/postsAction'
import { useHistory } from 'react-router-dom';

const PostForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [postinfo, setPostinfo] = useState({ title: '', content: '', files: '' });
    const post = useSelector((state) => (props.currentPostId ? state.posts.find((p) => p._id === props.currentPostId) : null));
    const user= JSON.parse(localStorage.getItem('userinfo'))

    useEffect(()=>{
        if(post){
            setPostinfo(post);
        }
    }, [post])

    const handleonChange = (e) => {
        setPostinfo({
            ...postinfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(props.currentPostId){
            dispatch(updatePost(props.currentPostId, {...postinfo, name: user.result.name}));
            history.push(`/posts/${props.currentPostId}`);
        }else{
            dispatch(createPost({...postinfo, name: user.result.name}));
            history.push('/');
        }
        clear();
    }

    const clear=()=>{
        setPostinfo({
            title: '', content: '', files: '' 
        })
    }

    if(!user){
        return(
            <div>
                {history.push('/login')};
            </div>
        )
    }
    return (
        <Card className="center">
            {!post?<h1 className="text-center">Create Post</h1>: <h1 className="text-center">Edit Post</h1>}
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={postinfo.title} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="content">
                    <Form.Label>content</Form.Label>
                    <Form.Control as="textarea" name="content" value={postinfo.content} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="content">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostinfo({ ...postinfo, files: base64 })} />
                    </Form.Group>
                    {!post?<Button variant="primary" type="submit">CreatePost</Button>: <Button variant="primary" type="submit">EditPost</Button>}                    
                </Form>
            </div>
        </Card>
    );
};
  
export default PostForm;