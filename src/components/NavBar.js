import React from 'react';
import {Link} from 'react-router-dom';
import tennisBall from '../assets/tennisball.PNG';

class NavBar extends React.PureComponent {
    rerouter = (path) => {
        alert(path);
    };

    render() {
        return (
            <div>
                <Link to='/'><img src={tennisBall}/></Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        );
    };
};

export default NavBar;