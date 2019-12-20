import React from 'react';
import '../assets/styling.css';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

class Projects extends React.PureComponent {
    render() {
        return (
            <div className='component-body'>
                <div className='content'>
                    <div className='content-head'>
                        <NavBar/>
                        <h3 className='page-title'>Projects</h3>
                    </div>
                    <div style={{'text-align':'center'}}>
                        <p>Under development! Please check back soon or you can look at some past work <a href='https://github.com/jtennies10'>here</a>. </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Projects