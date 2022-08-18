import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home";
import WordList from "./pages/WordList";
import Game from "./pages/Game";
import Notfoundpage from "./pages/Notfoundpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="WordList" element={<WordList />} />
        <Route path="Game" element={<Game />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  );
}
export default App;
