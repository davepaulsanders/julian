import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Bio } from "./components/Bio/Bio";
function App() {
  return (
    <div className="App flex flex-col items-center">
      <div className="app-container">
        <Header />
        <Home />
      </div>
        <Bio />
    </div>
  );
}

export default App;
