import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home";
import WordList from "./pages/WordList";
import Train from "./pages/Train";
import Game from "./pages/Game";
import Notfoundpage from "./pages/Notfoundpage";

import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="WordList" element={<WordList />} />
        <Route path="Train" element={<Train />} />
        <Route path="Game" element={<Game />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>

      <Card></Card>
    </div>
  );
}
export default App;
