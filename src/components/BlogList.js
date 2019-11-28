import React from 'react';
import ReactList from 'react-list';
import '../assets/styling.css';
import { BLOG_TITLES } from '../assets/blog-titles.js';

class BlogList extends React.PureComponent {
    
    constructor(props) {
        super(props)
        this.state = {
            blogPosts: this.getBlogLinks()
        }
    }

    getBlogLinks() {
        //TODO: split the blog titles and create links for each of them
        return BLOG_TITLES.split('\n')
    }
    
    renderItem(index, key) {
        return <div key={key}>{this.state.blogPosts[index]}</div>;
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