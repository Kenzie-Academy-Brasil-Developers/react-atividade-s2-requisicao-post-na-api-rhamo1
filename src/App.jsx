import { Toaster } from "react-hot-toast";
import "./App.css";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <Routes />
      <Toaster />
      <GlobalStyle />
    </>
  );
}

export default App;
