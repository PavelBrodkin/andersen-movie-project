import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// BLL

import { mergeSearchState } from "../../store/Slices/searchSlice";
import { logout } from "../../store/Slices/authSlice";
import { fetchMovies, resetSearchQuery } from "../../store/Slices/moviesSlice";

// Images
import Logo from "../../images/logo.svg";

// Styles
import { Wrapper, Content, LogoImg, Column, SessionName } from "./Header.style";

// Components
import Button from "../Button/Button";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector(
    (state) => state.auth.currentUser.name
  )?.toUpperCase();

  const logOutHandler = () => {
    dispatch(logout());
  };

  // В официальной обучалке Redux они используют async await в подобных случаях, при диспатче асинхронных thunk action (в примерах на codesandbox), но даже у них линтер подсвечивает что такая операция не понесет за собой никакого эффекта - решил оставить как у них. Далее в приложении есть еще подобные моменты.

  const logoClickHandler = async () => {
    dispatch(mergeSearchState(""));
    dispatch(resetSearchQuery());
    await dispatch(fetchMovies({ seacrhTerm: "", page: 1 }));
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg onClick={logoClickHandler} src={Logo} alt="logo" />
        </Link>
        {isLoggedIn ? (
          <Column>
            <SessionName>WELCOME, {userName}</SessionName>
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

Header.whyDidYouRender = true;
export default Header;
