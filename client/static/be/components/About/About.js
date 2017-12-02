import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import LeftNav from '../LeftNav/LeftNav';
import Header from '../Header/Header.js';
import './About.css';

class About extends Component{

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        $.ajax({
            url: '/about',
            type: 'get',
            dataType: 'json',
            success: (data)=>{
                console.log(data);
            }
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    render(){
        return(
            <div className="about">
                {/* <Header /> */}
                <div className="clearfix">
                    <LeftNav />
                    <div className="aboutContent">
                        <h1>个人简介</h1>
                        <form className="aboutForm">
                            <p>
                                <label>bio:</label>
                                <textarea cols="30" rows="10" className="about-input form-control about-password" type="password" />
                            </p>
                        </form>
                    </div> 
                </div>
            </div>
        );
    }
}

export default About;