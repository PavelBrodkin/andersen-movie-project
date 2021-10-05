import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/favorite.svg";

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const Wrapper = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  bottom: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: var(--lightGray);
  padding: 10px;
  cursor: pointer;
  transition: all linear 0.3s;

  @media screen and (max-width: 980px) {
    font-size: 14px;
    padding: 6px;
    font-weight: 700;
  }
`;

export const Favorite = ({ className }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
  </Svg>
);
