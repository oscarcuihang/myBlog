import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class CommentItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {author,text,time} = this.props;
        return(
            <div className="commentItem clearfix">
                <p>评论人：{author}</p>
                <p className="commentItem-text">内容：{text}</p>
                <span className="commentItem-time">{time}</span>
            </div>
        );
    }
}

export default CommentItem;