import ButtonWithArrow from "./buttonWithArrow"
import "./navigation.css"

function Navigation() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#" className="homelink">Home</a></li>
                <li><a href="#" className="aboutlink">About Me</a></li>
                <li><a href="#" className="serviceslink">Services</a></li>
            </ul>
            <ButtonWithArrow />
        </div>
    )
}

export default Navigation