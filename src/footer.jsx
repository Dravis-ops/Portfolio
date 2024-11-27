import ContactForm from "./footerComponents/contactForm";
import Services from "./footerComponents/services";
import './footer.css';
import SiteOrigin from "./footerComponents/SiteOrigin";
import Legals from "./footerComponents/legals";

export default function Footer() {
    const styleb = {
        borderTop: "2px solid #64ffff",
        paddingTop: "20px",
        color: "#ff26be"
    }
    return (
        <div className="footer">
            <div className="content-wrapper">
                <div className="reinto">
                    <h1 style={styleb}>My Portfolio</h1>
                    <span>
                        <hr />
                    </span>
                </div>
                <div>
                    <Services />
                </div>
                <div>
                    <SiteOrigin />
                </div>
                <div>
                    <Legals />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
