import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import LeftNav from '../LeftNav/LeftNav';
import Header from '../Header/Header.js';
import './User.css';

class User extends Component{

    constructor(props){
        super(props);
        this.state = {
            avatar: '',
            name: '',
            password: '',
            introduce: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.userSubmit = this.userSubmit.bind(this);
    }

    componentDidMount(){
        $.ajax({
            url: '/user',
            type: 'get',
            dataType: 'json',
            success: (data)=>{
                console.log(data.data);
                var userData = data.data[0];
                this.setState({
                    avatar: userData.avatar,
                    name: userData.name,
                    password: userData.password,
                    introduce: userData.introduce
                })
            }
        })
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    userSubmit(){
        let formData = new FormData($('#userForm')[0]);
        $.ajax({
            url: '/user/edit',
            type: 'post',
            data: formData,
            processData: false, // 避开jQuery对formdata的默认处理
            contentType: false, //自动加上正确的contentType
            success: (data)=>{
                console.log(data);
                alert(data.message);
                location.reload();
            },
            error: ()=>{
                console.log("请求失败");
            }
        })
    }

    render(){
        return(
            <div className="user">
                {/* <Header /> */}
                <div className="clearfix">
                    <LeftNav />
                    <div className="userContent">
                        <h1>个人信息修改</h1>
                        <form className="userForm" id="userForm" encType="multipart/form-data">
                            <p>
                                <label>avatar:</label>
                                <img src={this.state.avatar} className="userAvatar" />
                                <input className="user-input field user-avatar" type="file" name="avatar" onChange={this.handleInputChange} />
                            </p>
                            <p>
                                <label>userName:</label>
                                <input className="user-input field form-control user-userName" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </p>
                            <p>
                                <label>password:</label>
                                <input className="user-input field form-control user-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </p>
                            <p>
                                <label>introduce:</label>
                                <input className="user-input field form-control user-introduce" type="text" name="introduce" value={this.state.introduce} onChange={this.handleInputChange} />
                            </p>
                            <p>
                                <input type="button" className="btn user-btn" value="保存修改" onClick={this.userSubmit} />
                            </p>
                        </form>
                    </div> 
                </div>
            </div>
        );
    }
}

export default User;