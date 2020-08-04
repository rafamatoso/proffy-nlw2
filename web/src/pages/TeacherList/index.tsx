import React from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../assets/images';
import { icons } from '../../assets/images/icons';

import './styles.css';

export const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
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
    </div>
  );
};
