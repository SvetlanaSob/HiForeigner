import './App.css';
import MainHeader from "./components/header/header";
import { Routes, Route, Link } from "react-router-dom";
import Profile from './components/profile/profile';
import Mainpage from './components/mainpage/mainpage';
import MainFooter from './components/footer/footer';
function App() {
  return (
    <div className="App">
     <MainHeader></MainHeader>
     <div className={'content'}>
     <Routes>
                <Route path="/" element={<Mainpage/>} />
                <Route path="/profile" element={<Profile/>} />
              
 </Routes>
     </div>
     <MainFooter></MainFooter>
    </div>
  );
}

export default App;
