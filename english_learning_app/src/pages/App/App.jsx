import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Header from '../../components/Header/Header';
import {Dictionary, Game, Home, NotFound} from '../index';
import Footer from '../../components/Footer/Footer';
import './App.scss';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route path = "/game" element = {<Game/>}></Route>
          <Route path = "/dictionary" element = {<Dictionary/>}></Route>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "*" element = {<NotFound/>}></Route>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
