import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import $ from 'jquery';
import Header from '../Header/Header.js';
import './Home.css';
import Bg from '../../assets/images/avatar.jpg'

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            avatar: ''
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/user',
            type: 'get',
            success: (data)=>{
                if(data.status == 1){
                    let userData = data.data[0];
                    this.setState({
                        avatar: userData.avatar
                    })
                }
            }
        })
    }

    render(){
        return(
            <div className="home">
                {/* <Header />
                <div className="homeBox">
                    <div className="container">
                        <div className="row">
                            <div className="wrap-hero-content">
                                <div className="hero-content">
                                    <h1>Hello</h1>
                                    <br />
                                    <span className="typed">
                                        I am wlfsmile
                                    </span>
                                </div>
                            </div>
                            <div className="mouse-icon margin-20">
                                <div className="scroll"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="homeContent">
                    <p className="avatar">
                        <img src={this.state.avatar} />
                    </p>
                    <div className="homeNav">
                        <span><Link to="/blog">Blog</Link></span>
                        <span>|</span>
                        <span><Link to="/about">About</Link></span>
                        <span>|</span>
                        {/* <span><Link to="">Comment</Link></span>
                        <span>|</span> */}
                        <span><Link to="https://github.com/wlfsmile">Github</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;