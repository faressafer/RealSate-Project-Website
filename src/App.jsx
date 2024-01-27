import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <div className="white-gradient"/>
      </div>
    </div>
  );
}

export default App;
