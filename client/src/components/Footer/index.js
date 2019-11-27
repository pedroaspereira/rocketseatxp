import React from 'react';
import { Link } from 'react-router-dom';

import { FooterWrapper, FooterContent } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
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
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
