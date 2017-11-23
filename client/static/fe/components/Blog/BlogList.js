import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import BlogItem from './BlogItem.js';
import QueueAnim from 'rc-queue-anim';
import BlogAvatar from '../../assets/images/hero1.jpeg';
import Prev from '../../assets/images/prev.png';
import Next from '../../assets/images/next.png';

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
                    {/* <span>Blog</span> */}
                    <img src={BlogAvatar} className="BlogAvatar" />
                </div>
                <div className="blogList-main clearfix">
                    {/* <div className="arr"><span  className="prev">上一页</span></div> */}
                    <div className="blogList-content">
                        {/* <div className="arr">
                            <img src={Prev} />
                        </div> */}
                        <QueueAnim delay={100}>
                            {
                                this.state.blogData.map((count,i)=>{
                                    return <BlogItem key={i} title={count.title} time={count.time} id={count._id} />
                                })
                            }
                        </QueueAnim>
                        {/* <div className="arr">
                            <img src={Next} />
                        </div> */}
                    </div>
                    {/* <div className="arr next"><span>下一页</span></div> */}
                </div>
            </div>
        );
    }
}

export default BlogList;