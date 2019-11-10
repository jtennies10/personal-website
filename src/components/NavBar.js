import React from 'react';
import {Link} from 'react-router-dom';
import tennisBall from '../assets/tennisball.PNG';
import '../assets/styling.css';

class NavBar extends React.PureComponent {
    rerouter = (path) => {
        alert(path);
    };

    render() {
        return (
            <div className='NavBar'>
                <a href='/'><img src={tennisBall}/></a>
                <Link className='Link' to='/projects'>Projects</Link>
                <Link className='Link' to='/blog'>Blog</Link>
                <Link className='Link' to='/about'>About</Link>
            </div>
        );
    };
};

export default NavBar;