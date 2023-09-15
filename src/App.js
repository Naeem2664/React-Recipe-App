import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Routers,Routes,Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation/Navigation';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Pages/Home/Home.jsx'
import PNF from './components/Pages/Error/PNF.jsx';
function App() {
  return (
    <>
    <div className="App bg-white">
    <Routers>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<PNF/>} />
      </Routes>
      <Footer/>
    </Routers>
    </div>
    </>
    
  );
}

export default App;
