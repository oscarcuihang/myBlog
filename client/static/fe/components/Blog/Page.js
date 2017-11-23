import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            page:1
        };
    }

    render(){
        return(
            <div className="page clearfix">
                <ul className="pageItem clearfix"> 
                    <a href="#" className="pagePrev">&lt;</a>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <a href="#" className="pageNext">&gt;</a>
                </ul> 
            </div>
        );
    }
}

export default Page;