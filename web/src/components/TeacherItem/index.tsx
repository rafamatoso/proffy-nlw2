import React from 'react';

import { icons } from '../../assets/images/icons';

import './styles.css';

export const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/42968708?s=400&u=59b20b360a2ea19b723297a8cf2f0e77c267cf3e&v=4"
          alt="Rafael Matoso"
        />
        <div>
          <strong>Rafael Matoso</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        O melhor físico depois de Einstein.
        <br />
        <br />
        Einstein teria orgulho dos meus feitios, não estou brincando
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={icons.whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};
