import styled from 'styled-components';

export const RankingWrapper = styled.div`
  margin: 0;
  height: 100%;
  background: linear-gradient(-180deg, #009eb2, #f6f6f6);
  align-content: center;
  h1 {
    margin: 0;
  }
`;

export const RankingHeader = styled.div`
  padding-top: 60px;
  margin-right: 350px;
  margin-left: 350px;
  display: flex;
  justify-content: space-between;

  button {
    padding-right: 30px;
    padding-left: 30px;
    background: none;
    font-size: 20px;
    color: #fff;
    border-top: 4px #009eb2;
  }
`;

export const RankingList = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: stretch;
  margin-right: 200px;
  margin-left: 200px;
  align-items: stretch;
  width: 100%;
  max-width: 800px;
  list-style: none;
  padding: 30px;
  border-radius: 3px;
  justify-content: center;

  ul {
    display: grid;
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const RankingPosition = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;

    span {
      min-width: 45px;
      text-align: right;
      font-size: 24px;
      font-weight: bold;
    }
    div {
      margin-left: 20px;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 20px;
        overflow-wrap: break-word;
      }

      small {
        font-size: 14px;
        font-weight: bold;
      }
    }

    footer {
      display: block;

      span {
        font-size: 32px;
      }

      small {
        padding-left: 2px;
        font-size: 18px;
      }
    }
  }
`;
