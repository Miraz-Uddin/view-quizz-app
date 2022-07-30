import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
// import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav /> */}
      <Home />
    </>
  );
}

export default App;
