import React from 'react';
import {Link} from 'react-router-dom';
import black_menu from '../assets/black_menu.png';
import white_menu from '../assets/white_menu.png'
import '../assets/styling.css';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            menuDisplay: 'block',
            navBarClass: 'nav-bar-expanded',
            menuImage: white_menu
        }
    }

    toggleMenu = () => {
        if(this.state.menuDisplay == 'block') {
            this.setState({
                menuDisplay: 'none',
                navBarClass: 'nav-bar',
                menuImage: black_menu
            })
        } else {
            this.setState({
                menuDisplay: 'block',
                navBarClass: 'nav-bar-expanded',
                menuImage: white_menu
            })
        }
    }

    render() {
        return (
            <div className={this.state.navBarClass}>
                <div className='nav-bar-simple'>
                    <button className='menu-button' onClick={() => {this.toggleMenu()}}><img src={this.state.menuImage}/></button>
                    <h3>Table10is</h3>
                </div>
                <div className='menu-options' style={{display:this.state.menuDisplay}}>
                    <Link className='link' to='/'><h2>Home</h2></Link>
                    <Link className='link' to='/projects'><h2>Projects</h2></Link>
                    <Link className='link' to='/blog'><h2>Blog</h2></Link>
                </div>
            </div>
        );
    };
};

export default NavBar;