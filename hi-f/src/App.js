import './App.css';
import MainHeader from "./components/header/header";
import { Routes, Route, Link } from "react-router-dom";
import Profile from './components/profile/profile';
import Mainpage from './components/mainpage/mainpage';
import MainFooter from './components/footer/footer';
import SignIn from "./components/Sign/SignIn";
import SignUp from "./components/Sign/SignUp";
import Logged from "./components/mainpage/logged";
import Forum from "./components/forum/forum";
function App() {
  return (
    <div className="App">
     <MainHeader></MainHeader>
     <div className={'content'}>
     <Routes>
                <Route path="/" element={<Mainpage/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/mainpage" element={<Logged/>} />
                <Route path="/forum" element={<Forum/>} />

              
 </Routes>
     </div>
     <MainFooter></MainFooter>
    </div>
  );
}

export default App;
