import React from 'react';
import Headline from "./heroComponents/headline";
import MyInfo from "./heroComponents/myInfo";
import MyPhoto from "./heroComponents/myPhoto";
import "./hero.css";
import backgroundImage from './heroComponents/photo/pexels-padrinan-255379.jpg'; 

export default function Hero() {
    const style = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed',
    };

    return (
        <div className="hero" style={style}>
            <Headline />
            <div className='basicllyMe'>
                <MyInfo />
                <MyPhoto />
            </div>
        </div>
    );
}