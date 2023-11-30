import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import "./App.css";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
