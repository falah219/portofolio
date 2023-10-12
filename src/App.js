import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Header, Footer } from './components';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
