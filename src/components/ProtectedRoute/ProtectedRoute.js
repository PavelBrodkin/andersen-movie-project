import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { init } = useSelector((state) => state.init);

  // При обновлении страницы, когда мы авторизованы и находимся на favorites, все равно перебрасывало на signin, так как статус isLoggedIn до инициализации приложения стоит на false - решил пока что таким способом

  if (!init) {
    return <Component {...rest} />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default ProtectedRoute;
