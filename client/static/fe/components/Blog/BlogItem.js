import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import BlogImg from '../../assets/images/hero1.jpeg';
import moment from "moment";

class BlogItem extends Component{
    constructor(props){
        super(props);
        this.props.time.createAt = moment(this.props.time.createAt).format('MMM Do YY');
    }
    
    render(){
        const {title,time,id,text} = this.props;
        return(
            <div className="blogItem">
                {/* <img src={BlogImg} /> */}
                {/* <figcaption> */}
                    <Link to={"/blog/"+id} className="blogItem-content clearfix">
                        <span className="blogItem-content-title">
                            {title} 
                        </span>
                        {/* <p className="blogItem-content-text">{text}</p> */}
                        <span className="blogItem-content-time">
                            {this.props.time.createAt}
                        </span>
                    </Link>
                {/* </figcaption> */}
            </div>
        );
    }
}

export default BlogItem;