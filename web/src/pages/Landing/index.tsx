import React from 'react';

import { images } from '../../assets/images';
import { icons } from '../../assets/images/icons';

export const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <img src={images.logo} alt="Logo do Proffy" />
        <h2>Sua plataforma de estudos on-line</h2>
      </div>

      <img
        src={images.landing}
        alt="Plataforma de estudos"
        className="hero-image"
      />

      <div className="buttons-container">
        <a href="" className="study">
          <img src={icons.study} alt="Estudar" />
          Estudar
        </a>

        <a href="" className="give-classes">
          <img src={icons.giveClasses} alt="Dar aulas" />
          Dar aulas
        </a>

        <span className="total-connections">
          Total de 200 conexões já realizadas{' '}
          <img src={icons.purpleHeart} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};
