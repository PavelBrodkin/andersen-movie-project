import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;

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
  width: 200px;
  padding: 12px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;

  @media screen and (max-width: 500px) {
    display: block;
    max-width: 150px;
  }
`;

export const SessionName = styled.div`
  color: var(--lightGray);
  font-size: 12px;
  width: 100%;
  margin-right: 20px;
  border: 1px solid var(--lightGray);
  border-radius: 40px;
  padding: 5px 10px;
`;
