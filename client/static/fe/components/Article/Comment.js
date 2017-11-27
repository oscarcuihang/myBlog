import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import CommentItem from './CommentItem.js';
import moment from 'moment';

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
                // console.log(data);
                if(data.status == 1){
                    this.setState({
                        commentData:data.data
                    })
                }
            }
        })
    }

    submitComment(){
        let articleId = this.props.articleId;
        let author = $('.author').val();
        let text =  $('.commentText').val();
        // console.log($('.commentText').html());
        $.ajax({
            url: '/comment/'+this.props.articleId,
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
                    <form>
                    <p>
                        <label>名字：</label>
                        <input placeholder="your name" name="name" className="author form-control" />
                    </p>
                    <p>
                        <label>评论：</label>
                        <textarea cols="45" rows="5" name="text" className="commentText form-control" placeholder="your suggest"></textarea>
                    </p>
                    <p className="clearfix">
                        <input className="btn btnInfo" type="button" onClick={this.submitComment} value="提交评论" />
                    </p>
                    </form>
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