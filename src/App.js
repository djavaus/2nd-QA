import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const App = () => {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/work" element={<Work/>}/>
     
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
