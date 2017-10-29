import React,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRouter} from 'react-router';
import $ from 'jquery';
import '../assets/css/bootstrap.min.css';
import Blog from '../components/Blog/Blog.js';
import AddBlog from '../components/Blog/AddBlog.js';
import EditBlog from '../components/Blog/EditBlog.js'
import About from '../components/About/About.js'

render((
    <Router history={hashHistory}>
        <Route path="/" component={AddBlog} />
        <Route path="/edit" component={EditBlog} />
        <Route path="/about" component={About} />
    </Router>
),document.getElementById('root'));