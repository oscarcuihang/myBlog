import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class AddBlog extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        $.ajax({
            url: '/blog',
            type: 'post',
            data:{
                title: $('.title').val(),
                text: $('.text').val()
            }, 
            dataType: 'json',
            success:(data)=>{
                console.log(data);
            },
            error:()=>{
                console.log('失败');
            }
        })
    }

    render(){
        return(
            <div className="addBlog">
                <input name="title" className="title" ref="title" />
                <input name="text" className="text" ref="text" />
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        );
    }
}

export default AddBlog;