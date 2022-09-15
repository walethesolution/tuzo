import React from "react";
import { ThemeProvider } from "react-bootstrap";
import "./App.scss";
import Layout from "./Components/Layout";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="app">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
