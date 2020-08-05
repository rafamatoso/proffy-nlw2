import React from 'react';

import { PageHeader } from '../../components/PageHeader';
import { icons } from '../../assets/images/icons';

import './styles.css';

export const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
};
