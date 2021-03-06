import React,{Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';
import './Header.css';
import Logo from '../../assets/images/logo.png';

class Header extends Component{

    render(){
        return (
            <div className="header clearfix">
                <div className="for-sticky">
                    <div className="col-md-2 col-xs-6 logo">
                        <Link to="/">
                            <img alt="logo" className="logo-nav" src={Logo} />
                        </Link>
                    </div>
                </div>
                {/* <button className="menu-button" id="open-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button> */}
            </div>
        );
    }
}

export default Header;