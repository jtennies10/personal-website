import React from 'react';
import '../assets/styling.css';
import NavBar from './NavBar.js';

class Projects extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className='centered'>
                    <h1>Under Development</h1>
                    <p>Please check back soon or you can look at some past work <a href='https://github.com/jtennies10'>here</a>. </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects