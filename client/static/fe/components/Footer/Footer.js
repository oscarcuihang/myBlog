import React,{Component} from 'react';
import {render} from 'react-dom';
import './Footer.css';

class Footer extends Component{

    render(){
        return(
            <div className="foot">
               <p className="copyright"> © 2016-2017 ☺ wlfsmile</p>
            </div>
        );
    }

}

export default Footer;