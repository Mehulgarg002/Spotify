import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, user, ...rest }) => {
  const styles = {
    padding: "6rem 0 0 26rem",
    backgroundColor: "#181818",
    color: "#ffffff",
    minHeight: "calc(100vh - 6rem)",
  };

  return (
    <Route
      {...rest}
      element={
        user ? (
          <div style={styles}>
            <Element />
          </div>
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: rest.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
