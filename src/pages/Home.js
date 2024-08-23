import '../App.css';
import About from '../components/About';
import Layout from '../components/Layout';
function Home() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-fit h-fit bg-black">
        <About />
        <Layout />
      </div>
    </div>
  );
}

export default Home;
