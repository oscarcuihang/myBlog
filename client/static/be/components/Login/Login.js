import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import {Link} from 'react-router';
import './Login.css';

class Login extends Component{

    constructor(props){
        super(props);
        this.state == {
            logined: false
        };
        this.loginSubmit = this.loginSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e){
    //     this.setState({})
    // }

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
                    //window.location = '/be/#/blog';
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
        // if(this.props.logined){
        //     return(
        //         <Redirect to="/blog" />
        //     );
        // }
        return(
            <div className="login">
                <form action="" method="post">
                    <p>
                        <label>name:</label>
                        <input type="text" name="userName" id="userName" />
                    </p>
                    <p>
                        <label>password:</label>
                        <input type="password" name="password" id="password" />
                    </p>
                    <p>
                        <input type="button" value="submit" onClick={this.loginSubmit} />
                    </p> 
                </form>
            </div>
        );
    }
}

export default Login;