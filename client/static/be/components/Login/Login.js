import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import './Login.css';
import BlogAvatar from '../../assets/images/avatar.jpg';

class Login extends Component{

    constructor(props){
        super(props);
        this.state == {
            logined: false
        };
        this.loginSubmit = this.loginSubmit.bind(this);
    }


    loginSubmit(){
        // console.log($('#userName').val());
        $.ajax({
            url: '/about',
            type: 'post',
            dataType: 'json',
            data: {
                userName: $('#userName').val(),
                password: $('#password').val()
            },
            success: (data)=>{
                console.log(data);
               
                if(data.status == 1){
                    window.location = '/be/#/blog';
                    this.setState({
                        logined: true
                    });
                }
            },
            error: ()=>{
                console.log("请求失败");
            }
        })
    }

    render(){
        console.log(this.state);
        // if(this.state == null){

        // }else if(this.props.logined){
        //     console.log(1);
        //     return(
        //         <Redirect to="/blog" />
        //     );
        // }
        return(
            <div className="login">
                <img src={BlogAvatar} className="loginAvatar" />
                <div className="box">
                    <form action="" method="post" className="loginForm">
                        <p>
                            {/* <label>name:</label> */}
                            <input type="text" className="form-control form-input" name="userName" id="userName" placeholder="name" />
                        </p>
                        <p>
                            {/* <label>password:</label> */}
                            <input type="password" className="form-control form-input" name="password" id="password" placeholder="password" />
                        </p>
                        <p>
                            <input type="button" className="btn btn-primary btn-submit" value="登录" onClick={this.loginSubmit} />
                        </p> 
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;