import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import CommentItem from './CommentItem.js';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentData:[]
        };
        this.submitComment = this.submitComment.bind(this);
    }

    componentDidMount(){
        $.ajax({
            url: '/comment/'+this.props.articleId,
            type: 'get',
            dataType: 'json',
            success: (data)=>{
                console.log(data);
                if(data.status == 1){
                    this.setState({
                        commentData:data.data
                    })
                }
                console.log(this.state.commentData);
            }
        })
    }

    submitComment(){
        let articleId = this.props.articleId;
        let author = $('.author').val();
        let text =  $('.commentText').val();
        $.ajax({
            url: '/comment/'+this.state.articleId,
            type: 'post',
            data:{
                articleId: articleId,
                author: author,
                text: text
            },
            success: (data)=>{
                alert('评论成功');
                $(".commentList").load(location.href+".commentList"); 
            }
        })
    }

    render(){
        return(
            <div className="comment">
                <div className="commentEdit">
                    <p>
                        <label>名字：</label>
                        <input placeholder="your name" className="author form-control" />
                    </p>
                    <p>
                        <label>评论：</label>
                        <textarea className="commentText form-control" placeholder="your suggest"></textarea>
                    </p>
                    <p className="clearfix">
                        <button className="btn btnInfo" onClick={this.submitComment}>提交评论</button>
                    </p>
                </div>
                <div className="commentList">
                    {
                        this.state.commentData.map((count,i)=>{
                            return <CommentItem key={i} {...count} />
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Comment;