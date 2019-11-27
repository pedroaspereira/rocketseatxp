import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  RankingWrapper,
  RankingHeader,
  RankingList,
  RankingPosition,
} from './styles';

import { withRankingData } from './withRankingData/withRankingHOC';

const Ranking = ({ totalRanking }) => {
  const rank = totalRanking;
  console.log(rank);

  return (
    <div>
      <Header />
      <RankingWrapper>
        <RankingHeader>
          <button>Ranking por Escola</button>
          <button>Ranking por Aluno</button>
        </RankingHeader>
        <RankingList>
          <ul>
            <RankingPosition>
              <header>
                <span># 1</span>
                <div>
                  <strong>Pedro Pereira</strong>
                  <small>1 colegial</small>
                </div>
              </header>
              <footer>
                <span>9827</span>
                <small>Pontos</small>
              </footer>
            </RankingPosition>
          </ul>
          <ul>
            <RankingPosition>
              <header>
                <span># 1</span>
                <div>
                  <strong>Pedro Pereira</strong>
                  <small>1 colegial</small>
                </div>
              </header>
              <footer>
                <span>9827</span>
                <small>Pontos</small>
              </footer>
            </RankingPosition>
          </ul>
          <ul>
            <RankingPosition>
              <header>
                <span># 1</span>
                <div>
                  <strong>Pedro Pereira</strong>
                  <small>1 colegial</small>
                </div>
              </header>
              <footer>
                <span>9827</span>
                <small>Pontos</small>
              </footer>
            </RankingPosition>
          </ul>
          <ul>
            <RankingPosition>
              <header>
                <span># 1</span>
                <div>
                  <strong>Pedro Pereira</strong>
                  <small>1 colegial</small>
                </div>
              </header>
              <footer>
                <span>9827</span>
                <small>Pontos</small>
              </footer>
            </RankingPosition>
          </ul>
          <ul>
            <RankingPosition>
              <header>
                <span># 1</span>
                <div>
                  <strong>Pedro Pereira</strong>
                  <small>1 colegial</small>
                </div>
              </header>
              <footer>
                <span>9827</span>
                <small>Pontos</small>
              </footer>
            </RankingPosition>
          </ul>
          <ul>
            <RankingPosition>
              <header>
                <span># 1</span>
                <div>
                  <strong>Pedro Pereira</strong>
                  <small>1 colegial</small>
                </div>
              </header>
              <footer>
                <span>9827</span>
                <small>Pontos</small>
              </footer>
            </RankingPosition>
          </ul>
        </RankingList>
      </RankingWrapper>
      <Footer />
    </div>
  );
};

export default withRankingData(Ranking);
