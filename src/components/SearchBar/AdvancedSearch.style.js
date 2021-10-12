import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  width: 100%;
  height: auto;
  background-color: var(--darkGray);
  color: var(--white);
  padding: 20px 60px 40px 60px;
  transition: max-height 0.7s linear;
  margin: 0 auto;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  h2 {
    padding: 0 0 10px 0;
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  button {
    width: 30%;
    font-size: 25px;
    height: 50px;
  }
`;

export const GenreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const GenreItem = styled.div`
  color: ${({ styleProps }) => (styleProps ? "#1c1c1c" : "#fff")};
  background-color: ${({ styleProps }) => (styleProps ? "#eee" : "#none")};
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--lightGray);
  border-radius: 40px;
  padding: 5px 10px;
  margin-bottom: 20px;
  margin-right: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
