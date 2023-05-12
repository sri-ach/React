import logo from "./logo.svg";
import "./App.css";
import { Congratulations } from "./components/Congratulations.js";
import Gallery from "./components/Gallery.js";
import TodoList from "./components/TodoList";
import Bio from "./components/Bio";
import GalleryDetails from "./components/GalleryDetail";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Congratulations />
        <Gallery />
        <GalleryDetails/>
        <TodoList />
        <Bio />
      </header>
    </div>
  );
}
