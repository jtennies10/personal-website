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
    
    renderItem = (index, key) => {
        //TODO: create a link object for each with a corresponding route
        return (
            <div key={key}>
                <Link to={'/blog/'+this.state.blogPosts[index].replace(new RegExp(' ', 'g'), '-')}>
                    {this.state.blogPosts[index]}</Link>

                <Switch>
                    <Route exact path={'/blog/'+this.state.blogPosts[index].replace(new RegExp(' ', 'g'), '-')}>
                    </Route>
                </Switch>
            </div>
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