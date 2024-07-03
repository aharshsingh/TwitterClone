import SignUp from "./pages/Signup";
import SignIn from '../src/pages/SignIn'
import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" Component={Home}></Route>
          <Route path="/SignIn" Component={SignIn}></Route>
          <Route path="/SignUp" Component={SignUp}></Route>
          <Route path="/Profile" Component={Profile}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
