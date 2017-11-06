import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import Header from '../Header/Header.js';
import LeftNav from '../LeftNav/LeftNav.js';
import './UpdateBlog.css';

class UpdateBlog extends Component{

    constructor(props){
        super(props);
        this.state={
            title: '111',
            text: '111'
        };  
        this.updateSubmit = this.updateSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }
    

    updateSubmit(){
        $.ajax({
            url: '/blog/edit/'+this.props.params.id,
            type: 'post',
            data: {
                title: $('.title').val(),
                text: $('.text').val()
            },
            success: (data)=>{
                if(data.status == 1){
                    alert(data.message);
                    $(".updateBlog").load(location.href+".updateBlog");
                }
            }
        })
    }

    componentDidMount(){
        $.ajax({
            url: '/blog/markdown/'+this.props.params.id,
            type: 'get',
            //async:false,
            success: (data)=>{
                console.log(data);
                if(data.status == 1){
                    this.setState({
                        title: data.data.title,
                        text: data.data.text
                    });
                    //$('.text1').html(this.state.text); 
                }
            }
        })
    }

    handleChange(event){
        this.setState({
            title: event.target.value,
        });
    }
    handleChangeText(event){
        this.setState({
            text: event.target.value
        });
    }

    render(){
        return(
            <div className="updateBlog">
                <Header />
                <div className="clearfix">
                    <LeftNav />
                    <div className="addBlog-content">
                        <h2>创建文章</h2>
                        <p>
                            <lable>标题</lable>
                            <input type="text" className="title form-control" onChange={this.handleChange}  value={this.state.title} />
                        </p>
                        <p>
                            <lable>内容</lable>
                            <textarea cols="45" rows="22" className="text form-control" onChange={this.handleChangeText} value={this.state.text} ></textarea>
                        </p>
                        <p>
                            <button className="btn" onClick={this.updateSubmit}>提交</button>
                        </p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default UpdateBlog;