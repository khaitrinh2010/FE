import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Professor from "./components/Professor";
import ProfilePage from "./components/Professor";
import Course from "./components/Course";




function App() {
  return (
      <div>
        {/*<Header/>*/}
        {/*    <div className="App">*/}
        {/*        <div className="flex justify-center">*/}
        {/*            <HeroSection/>*/}
        {/*            <Feature/>*/}
        {/*        </div>*/}

        {/*    </div>*/}
        {/*<Footer/>*/}
          <Course/>
      </div>
  );
}

export default App;
