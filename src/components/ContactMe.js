import React from 'react';
import '../assets/styling.css';

class ContactMe extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    render() {
        this.setState({message:'testing setState'})
        return (
            <React.Fragment>
                <p>Contact page</p>
                <p>{this.state.message}</p>
            </React.Fragment>
        )
    }
}

export default ContactMe;