import React from 'react'
import welcome from '../images/welcome.gif';

const About=()=>{
    return(
        <div className="bg-light text-center">
            <h1><strong>"Up"</strong> is here to entertain you!</h1> 
            <h4>In "Up", you can view bunch of random stories, images or clips. <br/>
                If you are tired watching other ppl's posts, you can upload your own posts. <br/>
                All you need to do is register.</h4>
            <br/>
            <br/>
            <img src={welcome} width="350" height="300" alt="logo"/>
        </div>   
    )
}

export default About;