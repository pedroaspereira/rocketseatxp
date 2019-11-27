import React from 'react';

import {
  ContentWrapper,
  ContentHeader,
  CardWrapper,
  SeriesCard,
  SeriesHeader,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Modules = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <ContentHeader>Classroom</ContentHeader>
        <p>Escolha sua série?</p>
        <CardWrapper>
          <SeriesCard>
            <SeriesHeader>Matemática</SeriesHeader>
          </SeriesCard>
          <SeriesCard>
            <SeriesHeader>Biologia</SeriesHeader>
          </SeriesCard>
          <SeriesCard>
            <SeriesHeader>Quimica</SeriesHeader>
          </SeriesCard>
        </CardWrapper>
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export default Modules;
