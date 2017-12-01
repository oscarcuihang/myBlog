import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import LeftNav from '../LeftNav/LeftNav.js'
import Header from '../Header/Header.js'
import EditBlogItem from './EditBlogItem.js';
import './Blog.css';

class EditBlog extends Component{

    constructor(props){
        super(props);

        this.state = {
            blogData:[]
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/blog',
            type: 'get',
            success: (data)=>{
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
            <div className="editBlog">
                {/* <Header /> */}
                <div className="clearfix">
                    <LeftNav />
                    <div className="blogContent">
                        {
                            this.state.blogData.map((count,i)=>{
                                return <EditBlogItem key={i} {...count} />
                            })
                        }
                    </div> 
                </div>
            </div>
        );
    }
}

export default EditBlog;