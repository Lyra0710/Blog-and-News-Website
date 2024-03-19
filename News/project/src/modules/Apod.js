import React, { useState, useEffect } from "react";
import axios from "axios";

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=gKopibh2xaaeP9LSxiOSMBcrrO9xQmPr9B4RXtEB"
        );
        setApodData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-4" style={{ backgroundColor: "black", display: "flex", alignItems: "center" }}>
      <div style={{ flex: "0 0 45%", paddingRight: "60px"}}>
        <img
          src={apodData.url}
          alt={apodData.title}
          style={{ width: "100%", height: "auto" }} // Set the width to 100% to fill the available space
          className="img-fluid rounded"
        />
      </div>
      <div className="apod-description ml-4" style={{ flex: "0 0 45%", backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "5px", textAlign:"justify"}}> 
        <h2 className="apod-title" style={{color:"white"}}>Astronomy Picture of the Day</h2> 
        <p className="mt-3" style={{ color: "white", fontSize: "18px", lineHeight: "1.8" }}> 
          {apodData.explanation}
        </p>
      </div>
    </div>
  );
};

export default Apod;