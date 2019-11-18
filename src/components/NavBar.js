import React from 'react';
import {Link} from 'react-router-dom';
import HomeButton from '../assets/homebutton.png';
import '../assets/styling.css';

class NavBar extends React.PureComponent {
    rerouter = (path) => {
        alert(path);
    };

    render() {
        return (
            <div className='NavBar'>
                <a className='HomeIcon' href='/'><img src={HomeButton}/></a>
                <div className='CurrentPage'></div>
                <Link className='Link' to='/projects'>Projects</Link>
                <Link className='Link' to='/blog'>Blog</Link>
            </div>
        );
    };
};

export default NavBar;