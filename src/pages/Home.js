import '../App.css';
import About from '../components/About';
import Layout from '../components/Layout';
function Home() {
  return (
    <div className="w-screen min-h-[32rem] bg-black">
      <div className="w-auto h-fit bg-black">
        <About />
      </div>
    </div>
  );
}

export default Home;
