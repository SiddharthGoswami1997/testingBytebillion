import { Routes } from "react-router-dom";
import "./App.css";
import Career from "./Components/Career/Career";
import ContactUs from "./Components/ContactUs/ContactUs";
// import AboutUs from './Components/AboutUs/AboutUs';
// import FAQ from './Components/FAQ/FAQ';
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
// import Projects from './Components/caroursel/Project';
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/caroursel/Services/Services";
import { Route } from "react-router-dom";
import AboutUsPage from "./Components/AboutUs/AboutUsPage/AboutUsPage"
import StartProject from "./Components/StartProject/StartProject";
import Project from "./Components/StartProject/Component/Project/Project";
import GenEnquiry from "./Components/StartProject/Component/GenEnquiry/GenEnquiry";
import JobEnquiry from "./Components/StartProject/Component/JobEnquiry/JobEnquiry";
import Swipercarousel from "./Testing/Swipercarousel";

// import Testnavbar from "./Testing/Testnavbar";
function App() {
  return (
    <div className="App_byte">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>

        <Route path="/aboutus" element={<AboutUsPage />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactus" element={<ContactUs />} />
       
       
       
<Route exact path="/startproject/" element={<StartProject/>} >
        <Route exact path="" element={<Project/>}/>
        <Route exact path="general" element={<GenEnquiry/>}/>
        <Route exact path="job" element={<JobEnquiry/>}/>
        </Route>



<Route exact path="/startproject/" element={<StartProject/>} >
       
        </Route>
        

      </Routes>
      <Footer />  
{/* <Swipercarousel/> */}
   {/* <Testnavbar/> */}

    </div>
  );
}

export default App;
