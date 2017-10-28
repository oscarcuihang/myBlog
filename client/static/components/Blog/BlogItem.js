import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';

class BlogItem extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {title,time,id} = this.props;
        return(
            <div className="blogItem clearfix">
                <h2>{title}</h2>
                {time.createAt}
                <Link to={"/blog/"+id} className="readBlog">
                    阅读全文>>
                </Link>
            </div>
        );
    }
}

export default BlogItem;