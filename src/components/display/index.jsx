import { motion } from "framer-motion";

export const Display = ({ isAuthenticated, setIsAuthenticated }) => {
  const logout = () => {
    setIsAuthenticated(false);
    window.localStorage.clear();
  };
  return (
    <motion.div
      animate={{ x: [-100, 0] }}
      transition={{ type: "spring", stiffness: 10 }}
    >
      <div className="container">
        <h1>Usuário autenticado!</h1>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </motion.div>
  );
};
