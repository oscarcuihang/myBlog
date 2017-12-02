import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import './LeftNav.css';
import Header from '../Header/Header.js'

class LeftNav extends Component{

    render(){
        return(

                <div className="sidebar">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav in side accordion-group" id="side-menu">
                            <li className="creat-tab active">
                                <Link to="/blog"  data-toggle="tab">
                                    创建文章
                                </Link>
                            </li>
                            <li className="edit-tab">
                                <Link to="/edit"  data-toggle="tab">
                                    编辑文章
                                </Link>
                            </li>
                            <li className="about-tab">
                                <Link to="/about" data-toggle="tab">
                                    我的简介
                                </Link>
                            </li>
                            <li className="user-tab">
                                <Link to="/user" data-toggle="tab">
                                    个人信息
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default LeftNav;