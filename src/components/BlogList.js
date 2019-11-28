import React from 'react';
import ReactList from 'react-list';
import '../assets/styling.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { BLOG_TITLES } from '../assets/blog-titles.js';
import Projects from './Projects';

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
    
    renderItem = (index, key) => {
        //TODO: create a link object for each with a corresponding route
        return (
            <Router key={key}>
                <Link to={'/blog/'+this.state.blogPosts[index].replace(new RegExp(' ', 'g'), '-')}>
                    {this.state.blogPosts[index]}</Link>

                <Route path={'/blog/'+this.state.blogPosts[index].replace(new RegExp(' ', 'g'), '-')}>
                    <p>{this.state.blogPosts[index]}</p>
                </Route>
            </Router>
        )
            
      }

    render() {
        return (
            <div className='blog-list'>
                <div className='vertical-line'>
                    <ReactList
                        itemRenderer={(index,key) => this.renderItem(index,key)}
                        length={this.state.blogPosts.length}
                        type='uniform'
                    />
                </div>
            </div>
        )
    }
}

export default BlogList;