import styled from 'styled-components';
import bgMenu from '../../assets/Rectangle.png';

export const HeaderWrapper = styled.div`
  padding: 0 30px;
  background-image: url(${bgMenu});
  height: 116px;
`;

export const HeaderContent = styled.div`
  height: 80px;

  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    font-size: 35px;
    color: #ffff;
    display: flex;
    align-items: center;

    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #ffff;
      font-size: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    nav {
      padding: 10px;
    }
  }
`;
