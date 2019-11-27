import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin: 0;
  height: 650px;
  background: linear-gradient(-180deg, #009eb2, #f6f6f6);
  align-items: center;

  p {
    font-size: 38px;
    color: #fff;
  }
`;
export const ContentHeader = styled.div`
  margin: 0;
  color: #fff;
  font-size: 48px;
`;

export const CardWrapper = styled.div`
  padding: 60px;
  margin-right: 200px;
  margin-left: 200px;
  display: flex;
  justify-content: space-between;
`;

export const SeriesCard = styled.button`
  width: 250px;
  height: 250px;
  padding: 25px 12px;
  background-color: #fff;
  border: 3px #fff;
  border-radius: 5px;
  align-content: center;
  border-radius: 4%;
`;

export const SeriesHeader = styled.h1`
  font-size: 40px;
`;

export const SeriesStrong = styled.strong`
  font-size: 35px;
`;
