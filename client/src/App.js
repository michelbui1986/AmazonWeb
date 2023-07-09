import "./App.css";
import Navbar from "./components/header/Navbar";
import NewNav from "./components/newnavbar/NewNav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/signUp_signIn/SignIn";
import SignUp from "./components/signUp_signIn/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <NewNav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
