import React from 'react';
import ReactList from 'react-list';
import '../assets/styling.css';
import {Switch, Route, Link} from 'react-router-dom';
import { BLOG_TITLES } from '../assets/blog-titles.js';

class BlogList extends React.PureComponent {
    
    constructor(props) {
        super(props)
        this.state = {
            blogPosts: this.getBlogLinks()
        }
    }

    getBlogLinks() {
        return BLOG_TITLES.split('\n')
    }

    updateParent() {
        alert('update')
    }
    
    render() {
        return (
            <BlogPosts blogPosts={this.state.blogPosts}/>
        )
    }
}

function BlogPosts(props) {
    const items = props.blogPosts.map((blogPost) =>
        <PostItem key={blogPost} title={blogPost}/>
    );
    return (
        <ul className='blog-list'>
            {items}
        </ul>
    );
}

function PostItem(props) {
    return (
        <div className='blog-post-link'>
            <Link className='link' to={'/blog/'+props.title.replace(new RegExp(' ', 'g'), '-')}>
            <p className='link-text'>{props.title}</p></Link>

            <Switch>
                <Route exact path={'/blog/'+props.title.replace(new RegExp(' ', 'g'), '-')}>
                </Route>
            </Switch>
        </div>
    )
}

export default BlogList;