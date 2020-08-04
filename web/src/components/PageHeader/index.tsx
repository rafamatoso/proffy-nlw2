import React from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../assets/images';
import { icons } from '../../assets/images/icons';

export const PageHeader: React.FC = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={icons.back} alt="Voltar" />
        </Link>
        <img src={images.logo} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>Estes são os proffys disponíveis</strong>
      </div>
    </header>
  );
};
