import "./App.css";
import { HashRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Main />
      </HashRouter>
    </>
  );
}

export default App;
