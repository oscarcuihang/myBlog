import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Header from '../Header/Header.js';
import Comment from './Comment'
import './Article.css';

class Article extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            text:'',
            time:'',
            articleId: this.props.params.id
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/blog/'+this.props.params.id,
            typr: 'get',
            dataType: 'json',
            success: (data)=>{
                if(data.status == 1){
                    this.setState({
                        title: data.data.title,
                        text: data.data.text,
                        time: data.data.time.createAt
                    })
                }
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
                <Comment articleId={this.state.articleId} />
            </div>
        );
    }

}

export default Article;