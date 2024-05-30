
import React from "react";
import "./Admin.css";

const MainPage = () => {
  const handleMouseMove = (event) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty("--xPos", `${x}px`);
      card.style.setProperty("--yPos", `${y}px`);
    });
  };

  const titles = ["Movie Editing", "Organizing a Session", "Hall Management", "Ticket Sales Reports", "User Management", "Avatar Editing"]; // Özelleştirilebilir başlık metinleri

  return (
    <div className="main-container">
      <div className="cards" onMouseMove={handleMouseMove}>
        {titles.map((title, index) => (
          <div className={`card ${index >= 4 ? 'lower-cards' : ''}`} key={index}>
            <div className="card-content"></div>
            <div className={`card-title-${index}`}>{title}</div>
            <div className="card-button">
              <a href="#" className="blue-btn">Details</a>
            </div>
            <div className="card-info">General Info</div>
          </div>
        ))}
      </div>
      <div className="currently-showing">ADMIN</div>
    </div>
  );
};

export default MainPage;
