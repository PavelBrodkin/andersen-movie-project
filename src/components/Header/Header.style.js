import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;

  .test {
    font-size: 30px;
    color: var(--white);
  }

  a {
    margin-right: 20px;
    text-decoration: none;

    :last-child {
      margin-right: 0;
    }

    @media screen and (max-width: 500px) {
      margin-right: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 120px;
  padding: 12px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;

  @media screen and (max-width: 500px) {
    display: block;
    max-width: 150px;
  }
`;
