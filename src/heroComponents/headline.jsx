import React, { useEffect, useState } from "react";
import "./headline.css";
import Navigation from "./navigation";

function Headline() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headbar = document.querySelector(".headbar");
            if (headbar) {
                const offsetTop = headbar.offsetTop;
                const scrollTop = window.scrollY;

                if (scrollTop >= offsetTop) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`headbar ${isSticky ? "sticky-headbar" : ""}`}>
            <div className="title">Portfolio</div>
            <Navigation />
        </div>
    );
}

export default Headline;
