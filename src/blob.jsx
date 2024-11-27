import React, { useState, useEffect } from "react";
import './Blob.css';

export default function Blob() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="blob"
      style={{
        left: `${position.x - 50}px`, 
        top: `${position.y - 50}px`, 
      }}
    ></div>
  );
}
