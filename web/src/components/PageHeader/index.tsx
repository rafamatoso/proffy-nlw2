import React from 'react';
import { Link } from 'react-router-dom';

import { images } from '../../assets/images';
import { icons } from '../../assets/images/icons';

interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
}: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={icons.back} alt="Voltar" />
        </Link>
        <img src={images.logo} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
      </div>
    </header>
  );
};
