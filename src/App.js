// App.js
import Planets from "./data/data.json";
import Header from "./components/Header";
import Hero from "./components/Hero";

import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header planets={Planets} />
      <Hero planets={Planets} />
    </div>
  );
}

export default App;
