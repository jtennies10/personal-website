import React from 'react';
import BlogList from './BlogList.js';
import NavBar from './NavBar.js';
import '../assets/styling.css';
import FileReader from 'filereader';

class BlogHome extends React.PureComponent {
    constructor(props) {
        super(props)
        let fullPath = window.location.pathname.split('/')
        let endPath = fullPath[fullPath.length-1]
        if(endPath != 'blog') {
            this.state = {
                blogTitle: endPath.replace(new RegExp('-', 'g'), ' '),
                blogText: this.getNextBlogText(endPath)
            }
        } else {
            this.state = {
                blogTitle: 'Blog Home',
                blogText: 'Welcome to the home section of this blog'
            }
        }
    }

    componentDidUpdate() {
        let fullPath = window.location.pathname.split('/')
        let endPath = fullPath[fullPath.length-1]
        if(endPath != 'blog') {
            this.setState({
                blogTitle: endPath.replace(new RegExp('-', 'g'), ' '),
                blogText: this.getNextBlogText(endPath)
            })
        } else {
            this.setState({
                blogTitle: 'Blog Home',
                blogText: 'Welcome to the home section of this blog'
            })
        }
    }

    getNextBlogText(blogTitle) {
        const blogText = async () => {
            let f = await fetch('./How-I-Got-Here.txt')
            console.log(f)
        }
        blogText()
        return 't'
    }

    readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    var allText = rawFile.responseText;
                    console.log("allText: ", allText);
                    console.log(rawFile)
                    this.setState({
                        fundData: allText
                    });
                }
            }
        };
        rawFile.send(null);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <div>
                    <h1>{this.state.blogTitle}</h1>
                    <p className='section-summary'>{this.state.blogText}</p>
                    <BlogList/>
                </div>    
            </React.Fragment>
        )
    }
}

export default BlogHome;