import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import LeftNav from '../LeftNav/LeftNav.js'
import Header from '../Header/Header.js'
import './Blog.css';

class Blog extends Component{

    render(){
        return(
            <div className="blog">
                <Header />
                <div className="clearfix">
                    <LeftNav />
                    <div className="blogContent">
                        <h1>Blog</h1>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Blog;