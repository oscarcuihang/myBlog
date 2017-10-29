import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import BlogItem from './BlogItem.js';
import QueueAnim from 'rc-queue-anim';

class BlogList extends Component{
    constructor(props){
        super(props);
        this.state={
            blogData:[]
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/blog',
            type: 'get',
            dataType: 'json',
            success:(data)=>{
                console.log(data);
                if(data.status == 1){
                    this.setState({
                        blogData:data.data
                    })
                }
            }
        })
    }

    render(){
        return(
            <div className="blogList">
                <div className="blogList-title">
                    <h1>Blog</h1>
                </div>
                <QueueAnim delay={500} className="blogList-content">
                    {
                        this.state.blogData.map((count,i)=>{
                            return <BlogItem key={i} title={count.title} time={count.time} id={count._id} />
                        })
                    }
                </QueueAnim>
            </div>
        );
    }
}

export default BlogList;