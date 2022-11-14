import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Bio } from "./components/Bio/Bio";
import { Photos } from "./components/Photos/Photos";
import { Performances } from "./components/Performances/Performances";
function App() {
  return (
    <div className="App flex flex-col items-center">
      <div className="app-container">
        <Header />
        <Home />
      </div>
      <Bio />
      <Photos />
      <Performances />
    </div>
  );
}

export default App;
