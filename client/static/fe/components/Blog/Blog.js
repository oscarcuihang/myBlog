import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header/Header';
import BlogList from './BlogList.js';
import Page from './Page.js';
import './Blog.css';

class Blog extends Component{

    render(){
        return(
            <div className="blog">
                <Header /> 
                <BlogList />
                {/* <Page /> */}
            </div>
        );
    }
}

export default Blog;