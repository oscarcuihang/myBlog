import React,{Component} from 'react';
import {render} from 'react-dom';
import BlogItem from './BlogItem.js';

class BlogList extends Component{

    render(){
        return(
            <div className="blogList">
                <div className="blogList-title">
                    <h1>Blog</h1>
                </div>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
        );
    }
}

export default BlogList;