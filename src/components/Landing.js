import React from 'react';
import '../assets/styling.css'; 
import NavBar from './NavBar.js';
import Footer from './Footer.js';


class Landing extends React.PureComponent {
    render() {
        return (
            <div className='component-body'>
                <div className='content'>
                    <div className='content-head'>
                        <NavBar/>
                        <h3 className='page-title'>Home</h3>
                    </div>
                    <div className='content-main'>
                        <p>Hi there, my name is Joshua Tennies and thanks for visiting my website! I am a 22 year old Software Engineer who graduated from Western Governor’s University back in February of 2019. My first blog post walks through how I got to this point in my career in case you are curious. 
                        While I love developing software, my real passion lies in helping people and trying to be a better reflection of Jesus everyday. Beyond that, interests include adventuring, trying new things, movie-going, and fitness. Oh, and of course video games.
                        <br/><br/>This site is in its infancy and will be pretty bare for awhile as I 
                            progressively add to it. Slowly I will turn this place into a portfolio of my personal work, 
                            as well a place I can leave my thoughts for the world to see (or at least the three of four people that end up checking this place out). 
                            If you’d like to reach out to me, you can reach me at jdtennies10@gmail.com.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Landing;