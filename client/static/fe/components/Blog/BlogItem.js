import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import BlogImg from '../../assets/images/hero1.jpeg';

class BlogItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {title,time,id} = this.props;
        return(
            <div className="blogItem">
                {/* <img src={BlogImg} /> */}
                {/* <figcaption> */}
                    <p className="blogItem-content">
                        {title} 
                        <span className="blogItem-time">
                            {time}
                        </span>
                    </p>
                    {/* <p>{time.createAt}</p> */}
                    {/* <Link to={"/blog/"+id} className="readBlog">
                        阅读全文>>
                    </Link> */}
                {/* </figcaption> */}
            </div>
        );
    }
}

export default BlogItem;