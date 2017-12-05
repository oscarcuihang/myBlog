import React,{Component} from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutImg1 from '../../assets/images/blog-1.png';
import AboutImg2 from '../../assets/images/about.jpg';
import './About.css';

class About extends Component{

    constructor(props){
        super(props);
        this.state={
            bio: ''
        };
    }

    componentDidMount(){
        $.ajax({
            url: '/about',
            type: 'get',
            dataType: 'json',
            success: (data)=>{
                if(data.status == 1){
                    let aboutData = data.data;
                    this.setState({
                        bio: aboutData.bio
                    })
                    $('.about-main').html(this.state.bio);
                }
            }
        })
    }

    render(){
        console.log(this.state.bio);
        return(
            <div className="about">
                <Header /> 
                {/* <div className="aboutContent" style={{background:`url(${AboutImg1}) no-repeat`}}>
                </div> */}
                {/* <div className="aboutContent-img">
                    <img src={AboutImg1} className="img2" />
                </div>  */}
                <div className="about-main">
                    {/* <div className="about-img" style={{background:`url(${AboutImg1}) no-repeat`}}>
                    </div> */}
                    {this.state.bio}
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;