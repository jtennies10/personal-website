import React from 'react';
import BlogList from './BlogList.js';
import '../assets/styling.css';

class BlogHome extends React.PureComponent {
    render() {
        return (
            <div className='blog-main'>
                <p className='section-summary'>
                    Welcome to my personal blog! The topics of this blog will likely vary greatly. 
                    Here's the thing, I love developing software and talking about it, but I also love talking about
                    more general concepts involved in software engineering. Low level, high level, highly technical, or 
                    soft skill-based, it's all fair game here.
                </p>
                <BlogList/>
            </div>    
        )
    }
}

export default BlogHome;