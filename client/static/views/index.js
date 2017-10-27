import React,{Component} from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,IndexRouter} from 'react-router';
import $ from 'jquery';
import '../assets/css/bootstrap.min.css';
import Home from '../components/Home/Home.js';
import About from '../components/About/About.js';
import Blog from '../components/Blog/Blog.js';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
         <Route path="/blog" component={Blog} /> 
    </Router>
),document.getElementById('root'));