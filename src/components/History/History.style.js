import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;

  a {
    text-decoration: none;
    color: var(--medGray);
  }

  h1 {
    color: var(--medGray);
  }
`;

export const Cell = styled.div`
  text-align: center;
  font-size: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 10px;
  text-transform: uppercase;
  transition: box-shadow 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }
`;


