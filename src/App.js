import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './components/Footer';
import About from './components/About';
import { Container } from 'react-bootstrap';
import Post from './components/Posts/Post/Post';
import Posts from './components/Posts/Posts';
import Form from './components/Form/PostForm';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsAction';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Auth from './components/Auth/Auth';

const App = () => {
    const [currentPostId, setCurrentPostId] = useState(null);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentPostId, dispatch]);

    return (
        <Container>
          <Router>
          <NavBar />
          <Switch>
              <Route path="/login" exact component={Auth}/>
              <Route exact path="/posts/new" component={(routeinfo) => <Form routeinfo={routeinfo} currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />} />
              <Route exact path="/posts/:id" component={() => <Post currentPostId={currentPostId} setCurrentPostId={setCurrentPostId}/>} />
              <Route exact path="/posts/:currentPostId/edit" component={() => <Form currentPostId={currentPostId} setCurrentPostId={setCurrentPostId}/>} />
              <Route exact path="/posts" component={() => <Posts currentPostId={currentPostId} setCurrentPostId={setCurrentPostId}/>} />
              <Route path="/about" component={() => <About />} />
              <Route path="/" render={() => <Posts currentPostId={currentPostId} setCurrentPostId={setCurrentPostId}/>} />}
          </Switch>
          </Router>
          <Footer />
        </Container>
    );
};
  
export default App;