import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inputSearch } from "../../store/moviesSlice";

import { logout } from "../../store/authSlice";

// Images
import Logo from "../../images/logo.svg";

// Styles
import { Wrapper, Content, LogoImg, Column, SessionName } from "./Header.style";

// Components
import Button from "../Button/Button";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.currentUser.name);

  const logOutHandler = () => {
    dispatch(logout());
  };

  const logoClickHandler = () => {
    dispatch(inputSearch(""));
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg onClick={logoClickHandler} src={Logo} alt="logo" />
        </Link>
        {isLoggedIn ? (
          <Column>
            <Link to="/favorites">
              <Button type="button" text="Favorites" />
            </Link>
            <Link to="/history">
              <Button type="button" text="History" />
            </Link>
            <Button type="button" text="Logout" callback={logOutHandler} />
          </Column>
        ) : (
          <Column>
            <Link to="/signin">
              <Button type="button" text="Sign In" />
            </Link>
            <Link to="/signup">
              <Button type="button" text="Sign Up" />
            </Link>
          </Column>
        )}
      </Content>
    </Wrapper>
  );
};
export default Header;
