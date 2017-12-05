import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import './Header.css';
import Logo from '../../assets/images/logo.png';
import BlogAvatar from '../../assets/images/avatar.jpg';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            avatar: '',
            authorName: '',
            authorResume: ''
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/user',
            type: 'get',
            dataType: 'json',
            success: (data)=>{
                let userData = data.data[0]
                this.setState({
                    avatar: userData.avatar,
                    authorName: userData.name,
                    authorResume: userData.introduce
                })
            }
        })
    }

    render(){
        return (
            <div className="header">
                <nav className="main-nav">
                    <Link to="/">← Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/about">About</Link>
                    <a href="https://github.com/wlfsmile" className="myGit">github</a>
                </nav>
                 <div className="resume-title">
                    <img src={this.state.avatar} className="BlogAvatar" />
                    <p className="authorName">{this.state.authorName}</p>
                    <p className="authorResume">{this.state.authorResume}</p>
                </div> 
                {/* <div className="for-sticky">
                    <div className="col-md-2 col-xs-6 logo">
                        <Link to="/">
                            <img alt="logo" className="logo-nav" src={Logo} />
                        </Link>
                    </div>
                    <ul className="header-nav clearfix">
                        <li>
                            <span>
                                <Link to="/">
                                    Home
                                </Link>
                            </span>
                            <b>|</b>
                        </li>
                        <li>
                            <span>
                                <Link to="/blog">
                                    Blog
                                </Link>
                            </span>
                            <b>|</b>
                        </li>
                        <li>
                            <span>
                                <Link to="/about">
                                    About
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div> */}
                {/* <button className="menu-button" id="open-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button> */}
            </div>
        );
    }
}

export default Header;