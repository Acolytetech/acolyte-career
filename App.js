// import logo from './logo.svg';
import './App.css'
import Menu from './component/navbar/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Careers from './component/navbar/careerpage/Careers';
import Form from './component/navbar/careerpage/Careerform';
import Accommodation from './component/navbar/Menu';
import Home from './component/Home';
import Footer from './component/navbar/careerpage/Footer';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
         <Accommodation/>  {/*  navbar section */}
      <Home/>
      <Footer/>
      

  
    </div>
  );
}

export default App;
