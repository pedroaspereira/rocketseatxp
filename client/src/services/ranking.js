import axios from 'axios';

export const getRanking = () => {
  return axios.get('http://localhost:3333/results').catch(err => {
    console.error(err);
  });
};
