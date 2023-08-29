import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.scss";
import Header from "./components/common/Header";
import DummyCarousel from "./components/DummyCarousel";
import TextEditor from "./components/TextEditor";
import CommonHeader from "./components/common/CommonHeader";
import Footer from "./components/common/Footer";
import Landingpage from "./components/Landing/Landingpage";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import { useLocation } from "react-router-dom";
import Categories from "./components/categories/Categories";
import CategoryItems from "./components/categories/CategoryItems";
import Itemdesc from "./components/Itemdes";
import Authors from "./components/common/Authors/Authors";
import CartItems from "./components/Cart/CartItems";
import Otpverification from "./components/Login/Otpverification";
import Upload from "./components/UploadFile";
import Teams from "./components/Teams/Home";
import Read from "../src//components/Read";
import Poll from "./components/Quiz/Poller";
import Quiz from "./components/Quiz/Quiz";
import Competation from "../src/components/Teams/Competation"
import PoleCreation from "./components/Quiz/PoleCreation";
import Subheader from './components/common/Subheader';
import Subcategories from './components/categories/Subcategorires';
import Privacy from './components/Privacy/Privacy'
import Refund from './components/Privacy/Refund'
import Terms from './components/Privacy/Terms'
import Shipping from './components/Privacy/Shipping';
import Contactus from './components/Privacy/Contactus';
import AudioOptions from './components/Audio/AudioOptions';
import CategoryOptions from './components/categories/CategoryOptiions'
import QuizCreation from './components/Quiz/QuizCreation'
import Publications from './components/Landing/Publications';
import Faq from './components/Privacy/Faq';
import Looks from "./components/Landing/Looks";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

const { Content } = Layout;
const a = 100;

const App = () => {
  const question = "What's your favorite color?";
  const options = ["Red", "Blue", "Green", "Yellow"];
  const location = useLocation();
  var path = location.pathname;

  return (
    <div className="app">
      {path == "/" ? (
        <>
          <CommonHeader /> <Subheader />
        </>
      ) : (
        <>
          <CommonHeader /> <Header />
        </>
      )}

      <Routes>
        <Route path="/vaidateotp" element={<Otpverification />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<DummyCarousel />} />
        <Route path="/texteditor" element={<TextEditor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categoryOptions" element={<CategoryOptions />} />
        <Route path="/categorieitem" element={<CategoryItems />} />
        <Route path="/subcateogories" element={<Subcategories />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/itemdesc" element={<Itemdesc />} />
        <Route path="/audio" element={<AudioOptions />} />
        <Route
          path="/pole"
          element={<Poll question={question} options={options} />}
        />
              <Route path="/createcompetataion" element={<Competation />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/read" element={<Read />} />
        <Route path="/cartLogs" element={<CartItems />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/createquiz" element={<QuizCreation />} />
        <Route path="/createpole" element={<PoleCreation />} />
        <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Terms" element={<Terms/>} />
          <Route path="/Refund" element={<Refund/>} />
          <Route path="/Shipping" element={<Shipping/>} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Publications" element={<Publications/>} />
          <Route path="/Looks" element={<Looks/>} />

          <Route path="/quiz" element={<Quiz/>} />
          <Route path="/createquiz" element={<QuizCreation/>} />
          <Route path="/createpole" element={<PoleCreation/>} />

          <Route path="/Looks" element={<Looks/>} />
</Routes>

      <Footer/>
    </div>
  );
};

export default App;
