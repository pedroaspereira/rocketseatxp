import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, HeaderContent } from './styles';
import logo from '../../assets/logo.jpeg';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <nav>
          <img src={logo} alt="HackEscola" />
        </nav>

        <aside>
          <nav>
            <Link to="/home">Home</Link>
          </nav>
          <nav>
            <Link to="/classroom">Classroom</Link>
          </nav>
          <nav>
            <Link to="/ranking">Ranking</Link>
          </nav>
        </aside>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
