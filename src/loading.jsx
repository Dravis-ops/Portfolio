import React, { useState, useEffect } from "react";
import "./loading.css";
import load from "./assets/loading.gif";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    window.onload = () => setIsLoading(false);

    // Alternatively, you could add other event listeners if you want finer control
    // For example, for AJAX or API loading, you can set the loading state to false once complete.
  }, []);

  if (isLoading || isOffline) {
    return (
      <div className="loading-overlay">
        <div className="loading">
          <img src={load} alt="Loading..." />
          <p>{isOffline ? "You are offline. Please check your connection." : "Loading... Please wait"}</p>
        </div>
      </div>
    );
  }

  return null;
}
