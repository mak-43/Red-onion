import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Banner from './Components/Pages/Home/Banner/Banner';
import Login from './Components/Pages/Login/Login';
import Landing from './Components/Pages/Home/Landing/Landing';
import BreakFast from './Components/Pages/Home/Main/BreakFast/BreakFast';
import Lunch from './Components/Pages/Home/Main/Lunch/Lunch';
import Dinner from './Components/Pages/Home/Main/Dinner/Dinner';
import Register from './Components/Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Landing />}>
          <Route path='breakfast' element={<BreakFast />}></Route>
          <Route path='lunch' element={<Lunch />}></Route>
          <Route path='dinner' element={<Dinner />}></Route>
        </Route>
          <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/header' element={<Header />} />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;
