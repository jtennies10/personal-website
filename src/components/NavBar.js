import React from 'react';
import {Link} from 'react-router-dom';
import menu_black from '../assets/menu-black.png';
import menu_white from '../assets/menu-white.png';
import table_tennis_black from '../assets/table-tennis-black.png';
import table_tennis_white from '../assets/table-tennis-white.png';
import BlogList from './BlogList.js';
import '../assets/styling.css';

class NavBar extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            menuDisplay: 'none',
            navBarClass: 'nav-bar',
            menuImage: menu_black,
            mobileIcon: table_tennis_black,
            isMobile: this.setIsMobile()
        }
    }

    statics = {
        MOBILE_SCREEN_WIDTH: 750
    }

    toggleMenu = () => {
        if (this.setIsMobile()) {
            if(this.state.menuDisplay == 'block') {
                this.setState({
                    menuDisplay: 'none',
                    navBarClass: 'mobile-nav-bar',
                    menuImage: menu_black,
                    mobileIcon: table_tennis_black
                })
            } else {
                this.setState({
                    menuDisplay: 'block',
                    navBarClass: 'mobile-nav-bar-expanded',
                    menuImage: menu_white,
                    mobileIcon: table_tennis_white
                }) 
            }
        } else {
            if(this.state.menuDisplay == 'block') {
                this.setState({
                    menuDisplay: 'none',
                    navBarClass: 'nav-bar',
                    menuImage: menu_black
                })
            } else if(this.state.menuDisplay == 'none') {
                this.setState({
                    menuDisplay: 'block',
                    navBarClass: 'nav-bar-expanded',
                    menuImage: menu_white
                })
            }
        }
    }
    
    setIsMobile = () => {
        if(window.innerWidth < this.statics.MOBILE_SCREEN_WIDTH) {
            this.setState({
                isMobile: true
            })
            return true
        } else {
            this.setState({
                isMobile:false
            })
            return false
        }
    }

    renderBlogList = () => {
        if(this.state.navBarClass == 'nav-bar-expanded' || this.state.navBarClass == 'mobile-nav-bar-expanded') {
            return <BlogList className='blog-list'/>
        } 
    }

    render() {
        return (
            <div className={this.state.navBarClass}>
                <div className='nav-bar-simple'>
                    <button className='menu-button' onClick={() => {this.toggleMenu()}}><img src={this.state.menuImage}/></button>
                    <a href='/'><h3>{(this.state.isMobile) ? <img src={this.state.mobileIcon}/> : 'Table10is'}</h3></a>
                </div>
                <div className='menu-options' style={{display:this.state.menuDisplay}}>
                    <Link className='link' to='/'><h2>Home</h2></Link>
                    <Link className='link' to='/projects'><h2>Projects</h2></Link>
                    <Link className='link' to='/blog'><h2>Blog</h2></Link>
                    {this.renderBlogList()}
                </div>
            </div>
        );
    };
};

export default NavBar;