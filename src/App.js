import "./App.css";
import About from "./components/About/About ";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About />
      <Contact />
    </div>
  );
}

export default App;
