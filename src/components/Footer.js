import React from 'react'
import Dev from '../images/Dev.png';
import githubIcon from '../images/githubIcon.png';

const Footer=()=>{
    return(
        <footer className="bg-light text-center text-lg-start">
            <br/>
            <a href="https://dev.to/search?q=Cicada0315" target="_blank" rel="noopener noreferrer"><img src={Dev} width="30" height="30" alt="logo"/></a>
            &nbsp;
            <a href="https://github.com/Cicada0315" target="_blank" rel="noopener noreferrer"><img src={githubIcon} width="30" height="30" alt="logo"/></a>
            &nbsp; © 2021 Cicada.
            <br/>
            <br/>
        </footer>   
    )
}

export default Footer;