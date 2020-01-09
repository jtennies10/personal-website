import React from 'react';
import '../assets/styling.css';

class Footer extends React.PureComponent {
    render() {
        return (
            <div className='footer'>
                <p className='footer-content'>Site and content developed by Joshua Tennies<br/></p>
                <p className='footer-content'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
            </div>
        )
    }
}

export default Footer;