import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import {Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { HomePage, AboutPage, ProfilePage, CoursesPage, CourseDetailPage, ShowMorePage, SignInPage, SignUpPage} from "./Pages/index.js";

function App() {
  return (
    <div>
     <Navbar/>
     <hr/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ProfilePage/>}/>
      <Route path="/courses" element={<CoursesPage/>}/>
      <Route path="/coursedetail" element={<CourseDetailPage/>}/>
      <Route path="/showmore" element={<ShowMorePage/>}/>
      <Route path="/SignIn" element={<SignInPage/>}/>
      <Route path="/SignUp" element={<SignUpPage/>}/>
    </Routes>
    <hr/>
    <Footer/>
    
    </div>
  );
}

export default App;
