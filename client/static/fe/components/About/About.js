import React,{Component} from 'react';
import {render} from 'react-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutImg1 from '../../assets/images/blog-1.png';
import AboutImg2 from '../../assets/images/about.jpg';
import './About.css';

class About extends Component{

    constructor(props){
        super(props);
    }

    render(){
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

                </div>
                <Footer />
            </div>
        );
    }
}

export default About;