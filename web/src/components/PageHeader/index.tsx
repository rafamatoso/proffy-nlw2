import React from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../assets/images';
import { icons } from '../../assets/images/icons';

import './styles.css';

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
}: PageHeaderProps) => {
  return (
    <header id="page-header" className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={icons.back} alt="Voltar" />
        </Link>
        <img src={images.logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </header>
  );
};
