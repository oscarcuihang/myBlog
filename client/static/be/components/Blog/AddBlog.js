import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import LeftNav from '../LeftNav/LeftNav.js'
import Header from '../Header/Header.js'
import './Blog.css';

class AddBlog extends Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        $.ajax({
            url: '/blog',
            type: 'post',
            data: {
                title: $('.title').val(),
                text: $('.text').val()
            },
            success: (data)=>{
                alert(data.message);
                $(".addBlog").load(location.href+".addBlog");
            }
        })
    }

    render(){
        return(
            <div className="addBlog">
                {/* <Header /> */}
                <div className="clearfix">
                    <LeftNav />
                    <div className="addBlog-content">
                        <h2>创建文章</h2>
                        <p>
                            <lable>标题</lable>
                            <input type="text" className="title form-control" />
                        </p>
                        <p>
                            <lable>内容</lable>
                            <textarea cols="45" rows="22" className="text form-control" ></textarea>
                        </p>
                        <p>
                            <button className="btn" onClick={this.handleSubmit}>提交</button>
                        </p>
                    </div> 
                </div>
            </div>
        );
    }
}

export default AddBlog;