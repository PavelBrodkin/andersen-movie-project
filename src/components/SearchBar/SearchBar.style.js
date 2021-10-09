import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: var(--medGray);
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;

export const SuggestWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 100%;
  width: 100%;
  padding: 20px 60px 40px 60px;
  background-color: var(--darkGray);
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export const SuggestItem = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;


  :hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  }
`;
