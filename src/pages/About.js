import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="banner-about"></div>
      <div className="Collapse">
        <Collapse title="Fiabilité" img>
          <p className="Collapse-title">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p className="Collapse-title">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discrminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p className="Collapse-title">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discrminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p className="Collapse-title">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes
          </p>
        </Collapse>
      </div>
      <Footer />
    </div>
  );
};

export default About;
