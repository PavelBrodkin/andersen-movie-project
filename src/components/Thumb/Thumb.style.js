import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThunb 0.5s;
  cursor: pointer;
  position: relative;
  z-index: 0;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThunb {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
