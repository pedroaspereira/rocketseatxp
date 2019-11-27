import axios from 'axios';

export const getRanking = () => {
  return axios.get('http://localhost:3333/studentRanking').catch(err => {
    console.error(err);
  });
};
