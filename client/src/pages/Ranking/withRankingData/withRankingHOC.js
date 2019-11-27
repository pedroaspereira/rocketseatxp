import React, { useEffect, useState } from 'react';
import { getRanking } from '~/services/ranking/ranking';

export const withRankingData = Component => {
  const WithRankingDataHOC = props => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
      getRanking().then(r => setRanking(r.data));
    }, []);

    const totalRanking = ranking;

    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        totalRanking={totalRanking}
      />
    );
  };

  return WithRankingDataHOC;
};
