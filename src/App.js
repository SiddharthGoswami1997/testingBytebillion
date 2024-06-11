import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <AboutUs></AboutUs>
      <FAQ></FAQ>
      <Footer/>
    </div>
  );
}

export default App;
