import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import ThumbsUp from '../../../images/ThumbsUp.png'
import View from '../../../images/view.png'
import { updatePost, updateView } from '../../../actions/postsAction'

const PostCard = (props) => {
    const dispatch=useDispatch();
    const history=useHistory();
    const { title, name, files, likes, _id, createdAt, views } =props.post;

    const routeChange = () =>{
        dispatch(updateView(_id, {...props.post, views: views+1 }));
        history.push(`/posts/${_id}`);
    }
    return (
        <Card onClick={routeChange} key={_id}>
            <Card.Body>
            <Row>
                <Col>
                    <Card.Img variant="top" src={files} className="img-fluid"/>
                </Col>
                <Col>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{name} {createdAt.split("T")[0]}</Card.Subtitle>
                    <img src={View} width="15" height="15" alt="view"/>{views}
                    <img src={ThumbsUp} width="15" height="15" alt="like"/>{likes.length}{" "}
                </Col>
            </Row>
            </Card.Body>
        </Card>
    );
};
  
export default PostCard;