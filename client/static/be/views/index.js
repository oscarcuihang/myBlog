import React,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import $ from 'jquery';
import '../assets/css/bootstrap.min.css';
import Login from '../components/Login/Login.js';
import Blog from '../components/Blog/Blog.js';
import AddBlog from '../components/Blog/AddBlog.js';
import EditBlog from '../components/Blog/EditBlog.js'
import About from '../components/About/About.js'
import UpdateBlog from '../components/UpdateBlog/UpdateBlog.js';

render((
    // 路由配置，有问题
    <Router history={hashHistory}>
        <Route path="/" component={Login} /> 
        <Route path="/blog" component={AddBlog} /> 
        <Route path="/edit" component={EditBlog} />
        <Route path="/about" component={About} />
        <Route path='/edit/:id' component={UpdateBlog} />
    </Router>
),document.getElementById('root'));