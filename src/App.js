import "./App.css";
// import logo from "./components/logo.svg";
import React from "react";
import Exercise1 from "./components/Exercise2-1";
import Exercise2 from "./components/exercise2-2";
import Exercise3 from "./components/exercise3-1";
import Exercise4 from "./components/ex3.2/exercise3-2";
import Exercise4_1 from "./components/buttons4-1";
import Exercise4_2 from "./components/cards4-2";
import Exercise6_1 from "./components/ex6.1/newCards6-1";
import Exercise7_1 from "./components/increment7-1";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      // <Exercise1 />
      // <Exercise2 />
      // <Exercise3 />
      // <Exercise4 />
      // <Exercise4_1 />
      // <Exercise4_2 />
      // <Exercise6_1 />
      <Exercise7_1 />
    );
  }
}

export default App;
