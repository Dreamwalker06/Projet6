import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="banner">
        <h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        <div className="card">
          <h2>Titre de la location</h2>
        </div>

        <div className="card">
          <h2>Titre de la location</h2>
        </div>
        <div className="card">
          <h2>Titre de la location</h2>
        </div>
        <div className="card">
          <h2>Titre de la location</h2>
        </div>
        <div className="card">
          <h2>Titre de la location</h2>
        </div>
        <div className="card">
          <h2>Titre de la location</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
