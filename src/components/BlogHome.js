import React from 'react';
import BlogList from './BlogList.js';
import NavBar from './NavBar.js';
import '../assets/styling.css';

class BlogHome extends React.PureComponent {
    state = {
        blogTitle: 'Blog Home',
        blogText: 'Welcome to the home section of this blog'
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
                blogText: 'Welcome to the home section of this blog'
            })
        }
    }

    getNextBlogText(nextBlogTitle) {
        const fetchData = async (blogTitle) => {
            let response = await fetch('/blog_posts/' + nextBlogTitle + '.txt')
            let data = await response.text()
            return data
        }
        fetchData(nextBlogTitle).then(nextBlogText => {
            this.setState({
                blogTitle: nextBlogTitle.replace(new RegExp('-', 'g'), ' '),
                blogText: nextBlogText
            })
            //console.log(nextBlogText)
        })
    }

    async getUserAsync(name) 
    {
        let response = await fetch('/' + name + '.txt')
        let data = await response.text()
        return data
    }

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div className='content-main'>
                    <BlogList className='blog-list'/>
                    <div className='center-content'>
                        <h1>{this.state.blogTitle}</h1>
                        <p>{this.state.blogText}</p>
                    </div>
                    <div className='empty-side'/>
                </div>    
            </React.Fragment>
        )
    }
}

export default BlogHome;