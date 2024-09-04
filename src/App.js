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
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";




function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/professor" element={<Professor />} />
                  <Route path="/course" element={<Course />} />
                  {/* Add more routes as needed */}
              </Routes>
              <Footer/>
          </div>
      </Router>

  );
}

export default App;
