import { Display } from "../../components/display";
import { Login } from "../../components/login";

export const Home = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <Display
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        ></Display>
      ) : (
        <Login
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        ></Login>
      )}
    </>
  );
};
