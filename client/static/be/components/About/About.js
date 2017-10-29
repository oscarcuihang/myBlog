import React,{Component} from 'react';
import {render} from 'react-dom';
import LeftNav from '../LeftNav/LeftNav';
import Header from '../Header/Header.js';
import './About.css';

class About extends Component{

    render(){
        return(
            <div className="about">
                <Header />
                <div className="clearfix">
                    <LeftNav />
                    <div className="aboutContent">
                        <h1>About</h1>
                    </div> 
                </div>
            </div>
        );
    }
}

export default About;