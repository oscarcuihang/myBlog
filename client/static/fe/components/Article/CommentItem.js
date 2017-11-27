import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import moment from 'moment';

class CommentItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // const {author,text,time} = this.props;
        let time = moment(this.props.time).format('MMM Do YY');
        return(
            <div className="commentItem clearfix">
                <p>评论人：{this.props.author}</p>
                <p className="commentItem-text">内容：{this.props.text}</p>
                <span className="commentItem-time">{time}</span>
            </div>
        );
    }
}

export default CommentItem;