import React, { useState, useEffect } from "react";
import "./jobtitles.css";

export default function JobTitles() {
  const strings = ["Software Developer.", "Freelancer.", "Graphic Designer."];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (letterIndex < strings[currentStringIndex].length) {
        setDisplayedText((prev) => prev + strings[currentStringIndex][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setLetterIndex(0);
          setDisplayedText("");
          setCurrentStringIndex((prev) => (prev + 1) % strings.length); 
        }, 5000); 
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, [letterIndex, currentStringIndex]);

  return <span className="jobtitles">{displayedText}</span>;
}
