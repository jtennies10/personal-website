import React from 'react';
import '../assets/styling.css';
import {Switch, Route, Link} from 'react-router-dom';

class BlogList extends React.PureComponent {
    state = {
        blogPosts: []
    }

    constructor(props) {
        super(props)
        this.getBlogLinks()
    }

    getBlogLinks = () => {
        const fetchData = async () => {
            let response = await fetch('/blog_posts/blog-titles.txt')
            let data = await response.text()
            return data
        }
        fetchData().then(posts => {
            this.setState({
                blogPosts: posts.split('\n')
            })
            
        })
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