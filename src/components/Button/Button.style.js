import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--medGray);
  width: 25%;
  min-width: 100px;
  height: 40px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontMed);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
