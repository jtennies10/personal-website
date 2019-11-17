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
                <a className='HomeIcon' href='/'><img src={tennisBall}/></a>
                <div className='CurrentPage'></div>
                <Link className='Link' to='/projects'>Projects</Link>
                <Link className='Link' to='/blog'>Blog</Link>
            </div>
        );
    };
};

export default NavBar;