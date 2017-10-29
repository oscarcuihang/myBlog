import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';

class EditBlogItem extends Component{
    constructor(props){
        super(props);
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    deleteSubmit(){
        var message = confirm('你确定要删除该文章么？');
        if(message){
            $.ajax({
                url:'/blog/remove',
                type: 'post',
                data: {
                    id: this.props._id
                },
                success: (data)=>{
                    if(data.status == 1){
                        alert(data.message);
                        $(".blogContent").load(location.href+".blogContent");
                    }
                }
            })
        }
        
    }

    render(){
        const count = this.props;
        return(
            <div className="editBlogItem">
                <h2>{count.title}</h2>
                {count.time.createAt}
                <div className="setting">
                    <Link to="/elitblog" className="readBlog">
                        编辑
                    </Link><br /><br />
                    <span className="delete" onClick={this.deleteSubmit}>删除</span>
                </div>
            </div>
        );
    }

}

export default EditBlogItem;