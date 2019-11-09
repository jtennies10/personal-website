import React from 'react';

class NavBar extends React.PureComponent {
    rerouter = (path) => {
        alert(path);
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={() => alert('projects')}>Projects</button>
                <button onClick={() => alert('blog')}>Blog</button>
                <button onClick={() => alert('about')}>About</button>
            </React.Fragment>
        );
    };
};

export default NavBar;