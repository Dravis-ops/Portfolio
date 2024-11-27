import tiktok from "./images/Tiktok.gif";
import twitter from "./images/twitter.gif";
import email from "./images/Email.gif";
import facebook from "./images/Facebook.gif";
import whatsapp from "./images/Whatsapp.gif";
import instagram from "./images/Instagram.gif";
import call from "./images/call.svg";
import sms from "./images/sms.svg";

const socialAccDetails = {
    tiktok: {
        accountN: "Tiktok",
        accountL: "",
        accountI: tiktok
    }, 
    twitter: {
        accountN: "Twitter",
        accountL: "",
        accountI: twitter
    }, 
    email: {
        accountN: "Email",
        accountL: "",
        accountI: email
    }, 
    facebook: {
        accountN: "Facebook",
        accountL: "",
        accountI: facebook
    },  
    instagram: {
        accountN: "Instagram",
        accountL: "",
        accountI: instagram
    },
    whatsapp: {
        accountN: "Whatapp",
        accountL: "",
        accountI: whatsapp
    },
    callsNsms: {
        accountN: "Calls/SMS",
        accountNo: "0790269182" || user.getPhoneNumber(),
        accountI: [call, sms]
    }
};

export default socialAccDetails;