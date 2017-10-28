import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Header from '../Header/Header.js';
import './Article.css';

class Articel extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            text:'',
            time:'',
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/blog/'+this.props.params.id,
            typr: 'get',
            dataType: 'json',
            success: (data)=>{
                console.log(data);
                this.setState({
                    title: data.data.title,
                    text: data.data.text,
                    time: data.data.time.createAt
                })
                console.log(this.state)
            }
        })
    }

    render(){
        return(
            <div className="article">
                <Header />
                <div className="articleContent">
                    <div className="articleTitle">
                        <h1>{this.state.title}</h1>
                    </div>
                    <p className="articleTime">发表于&nbsp;&nbsp;{this.state.time}</p>
                    <div className="articleText">
                        {this.state.text}
                    </div>
                </div>
            </div>
        );
    }

}

export default Articel;