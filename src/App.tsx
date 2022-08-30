import { Route, Routes } from 'react-router-dom';
import './App.scss';
import FullSnk from './Pages/FullSnk/FullSnk';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home'; 
import NotFound from './Pages/NotFoundPage/NotFound';

function App() {

  return (
    <div className='wrapper'>
      <div className='wrapper-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='items/:id' element={<FullSnk/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  ); 
}

export default App;
