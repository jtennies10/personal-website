import React from 'react';
import BlogList from './BlogList.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import '../assets/styling.css';

const HOME_TEXT = `Welcome to my personal blog! The topics of this blog will likely vary greatly. 
Here's the thing, I love developing software and talking about it, but I also love talking about
more general concepts involved in software engineering. Low level, high level, highly technical, or 
soft skill-based, it's all fair game here. All available posts are displayed to the left.`


class BlogHome extends React.PureComponent {
    state = {
        blogTitle: 'Blog Home',
        blogText: HOME_TEXT
    }

    constructor(props) {
        super(props)
        this.renderAppropriate()
    }

    componentDidUpdate() {
        this.renderAppropriate()
    }

    renderAppropriate() {
        let fullPath = window.location.pathname.split('/')
        let endPath = fullPath[fullPath.length-1]
        if(endPath != 'blog') {
            this.getNextBlogText(endPath)
        } else {
            this.setState({
                blogTitle: 'Blog Home',
                blogText: HOME_TEXT
            })
        }
    }

    getNextBlogText(nextBlogTitle) {
        const fetchData = async (blogTitle) => {
            let response = await fetch('/blog_posts/' + nextBlogTitle + '.html')
            let data = await response.text()
            return data
        }
        fetchData(nextBlogTitle).then(nextBlogText => {
            this.setState({
                blogTitle: nextBlogTitle.replace(new RegExp('-', 'g'), ' '),
                blogText: nextBlogText
            })
            console.log(nextBlogText)
        })
    }

    render() {
        return (
            <div className='component-body'>
                <NavBar/>
                <div className='content-main'>
                    <BlogList className='blog-list'/>
                    <div className='center-content'>
                        <h1>{this.state.blogTitle}</h1>
                        <p dangerouslySetInnerHTML={{ __html: this.state.blogText }}/>
                    </div>
                    <div className='empty-side'/>
                </div>  
                <Footer/>  
            </div>
        )
    }
}

export default BlogHome;