import React from "react";
import "./socialMedia.css";
import socialAccDetails from "./sAdetails";

export default function Socials() {
    return (
        <div className="socialAccounts">
            <ul>
                <li>
                    <a href={socialAccDetails.tiktok.accountL}>
                        <img src={socialAccDetails.tiktok.accountI} alt={socialAccDetails.tiktok.accountN} />
                    </a>
                </li>
                <li>
                    <a href={socialAccDetails.instagram.accountL}>
                        <img src={socialAccDetails.instagram.accountI} alt={socialAccDetails.instagram.accountN} />
                    </a>
                </li>
                <li>
                    <a href={socialAccDetails.facebook.accountL}>
                        <img src={socialAccDetails.facebook.accountI} alt={socialAccDetails.facebook.accountN} />
                    </a>
                </li>
                <li>
                    <a href={socialAccDetails.twitter.accountL}>
                        <img src={socialAccDetails.twitter.accountI} alt={socialAccDetails.twitter.accountN} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
