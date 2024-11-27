import React from "react";
import "./contactForm.css";
import send from "./icons/send.gif";

export default function ContactForm() {
    const iconstyle = {
        width: "30px",
        height: "30px",
        position: "absolute",
        right: "30px",
        top: "10%"
    }
    return (
    <div className = "contactMe">
        <h3>Contact me</h3>
        <form action="#" method="post">
            <div className="container">
                <div className="entryarea">
                    <input type="text" className="inputs"required/>
                    <div className="labelline">Email</div>
                </div>
            </div>
            <div className="container">
                <div className="entryarea">
                    <textarea name="message" className= "inputs" id="guestMsg" rows = "4" cols = "50"></textarea>
                    <div className="labelline textareaLabel">Message</div>
                </div>
            </div>
            <div className="sendButton">
                <span className="placeholder">
                    <img style={iconstyle} 
                        src={send} 
                        alt="Send" 
                    />
                </span>
                <input type="submit"   name="sendGuestMsg" id="sendGuestMsg" />
            </div>
        </form>
    </div>);
}
