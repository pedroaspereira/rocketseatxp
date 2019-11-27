import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 0 30px;
  background: #009eb2;
`;

export const FooterContent = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
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
