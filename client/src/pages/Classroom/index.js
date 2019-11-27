import React from 'react';
import { Link } from 'react-router-dom';

import {
  ContentWrapper,
  ContentHeader,
  CardWrapper,
  SeriesCard,
  SeriesHeader,
  SeriesStrong,
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Classroom = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <ContentHeader>Salas de Aula</ContentHeader>
        <p>Escolha sua série?</p>
        <CardWrapper>
          <SeriesCard>
            <Link to="/modules" />
            <SeriesHeader>1 ano</SeriesHeader>
            <SeriesStrong>Esino Médio</SeriesStrong>
          </SeriesCard>
          <SeriesCard Link="/modules">
            <SeriesHeader>2 ano</SeriesHeader>
            <SeriesStrong>Esino Médio</SeriesStrong>
          </SeriesCard>
          <SeriesCard>
            <SeriesHeader>3 ano</SeriesHeader>
            <SeriesStrong>Esino Médio</SeriesStrong>
          </SeriesCard>
        </CardWrapper>
      </ContentWrapper>
      <Footer />
    </div>
  );
};

export default Classroom;
