import React from "react";
{/*import Template from "./bodyComponents/aboutTemp";*/}
import "./bodySection.css";
import laptop from "./bodyComponents/images/laptop.png";
import github from "./bodyComponents/images/Github.gif";
import pwonLp from "./bodyComponents/images/pwonLp.png";
import discord from "./bodyComponents/images/discord.gif";
import design from "./bodyComponents/images/design.png";
import youtube from "./bodyComponents/images/Youtube.gif";
import Socials from "./bodyComponents/socialMedia";

export default function Main() {
    const titleObjects = [
        {
            title: "Software Developer",
            photo: laptop, 
            description: "I'm an expert in building scalable and high quality web applications, Complex or simple. Check out my Gitbub \u{1F440}",
            account: {
                name: "Github",
                link: "https://github.com/yourusername", 
                icon: github 
            }
        },
        {
            title: "Freelancer",
            photo: pwonLp, 
            description: "I do Freelance web and mobile app development with a lot of completed projects and more still ongoing. Don't miss out on my Discord \u{1F44D}",
            account: {
                name: "Discord",
                link: "https://discord.com/users/yourid", 
                icon: discord
            }
        },{
            title: "Graphic Designer",
            photo: design,
            description: "Passionate about creating visually appealing designs. I've also created tutorials and posted on my YouTube channel. Check 'em out \u{1F60E}",
            account: {
                name: "YouTube",
                link: "https://youtube.com/channel/yourchannel", 
                icon: youtube
            }
        }
        
    ];
    return (
        <section className="main-section">
           
            {/*<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/QdCeE2r7sxsDTG80KORiAO/Figma-basics?node-id=602-9&embed-host=share" allowfullscreen></iframe>*/}
            
            {/*
            {titleObjects.map((item, index) => (
                <Template key={index} item={item} index={index}/>
            ))}*/}
            <Socials />
        </section>
    );
}