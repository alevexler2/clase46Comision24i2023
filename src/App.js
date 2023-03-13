import { Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProdDet from './pages/ProdDet';

function App() {
  const isLog = true;
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/home' element={ <Home /> }/>
          <Route path='/prod/:id' element={ isLog ? <ProdDet /> : <h1>401 no autorizado</h1>}/>
          <Route path='*' element={ <Error404/> }/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
