import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
{/*TEST*/}



function App() {
  return (
      <div>
        <Header/>
            <div className="App">
                <div className="flex justify-center">
                    <HeroSection/>
                    <Feature/>
                </div>

            </div>
        <Footer/>
      </div>
  );
}

export default App;
