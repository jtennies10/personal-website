import React from 'react';
import ReactList from 'react-list';
import '../assets/styling.css';

class BlogList extends React.PureComponent {
    state = {
        blogPosts: ['1','2','3','4','5','6']
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