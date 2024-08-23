import './App.css';
import About from './components/About';
import Chapters from './components/Chapters';
function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-fit h-fit bg-black">
        <About />
        <Chapters />
      </div>
    </div>
  );
}

export default App;
