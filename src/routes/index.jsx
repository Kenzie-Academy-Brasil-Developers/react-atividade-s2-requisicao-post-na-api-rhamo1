import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { AnimatePresence } from "framer-motion";

export const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
