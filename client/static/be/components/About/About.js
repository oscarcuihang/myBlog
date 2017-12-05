import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import LeftNav from '../LeftNav/LeftNav';
import Header from '../Header/Header.js';
import './About.css';

class About extends Component{

    constructor(props){
        super(props);
        this.state = {
            bio: ''
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.TextSubmit = this.TextSubmit.bind(this);
    }

    componentDidMount(){
        $.ajax({
            url: '/about/markdown',
            type: 'get',
            dataType: 'json',
            success: (data)=>{
                console.log(data);
                var textData = data.data;
                this.setState({
                    bio: textData.bio
                })
            }
        })
    }

    handleTextChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    TextSubmit(){
        let bio = $('.about-text').val();
        $.ajax({
            url: '/about',
            type: 'post',
            data:{
                bio: bio
            },
            success: (data)=>{
                alert(data.message);
                location.reload();
            }
        })
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
                                {/* <label>bio:</label> */}
                                <textarea cols="45" rows="25" className="about-input form-control about-text" name="bio" type="password" onChange={this.handleTextChange} value={this.state.bio} />
                            </p>
                            <p>
                                <input type="button" value="提交" className="btn" onClick={this.TextSubmit} />
                            </p>
                        </form>
                    </div> 
                </div>
            </div>
        );
    }
}

export default About;