import { Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Header, Footer } from './components';
import './App.css';

function App() {
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
