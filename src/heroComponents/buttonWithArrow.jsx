import React from 'react';
import arrowImage from './icons/arrows.png';
import './ButtonWithArrow.css';

export default function ButtonWithArrow() {
    return (
        <button className="ContactButton">
            Contact me
            <img src={arrowImage} alt="Goto" className="arrow" />
        </button>
    );
}
