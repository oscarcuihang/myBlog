import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header/Header.js';
import './Home.css';
import Bg from '../../assets/images/hero1.jpeg'

class Home extends Component{

    render(){
        return(
            <div className="home">
                <Header />
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
                </div>
            </div>
        );
    }
}

export default Home;