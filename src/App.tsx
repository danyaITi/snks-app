import { Route, Routes } from 'react-router-dom';
import './App.scss';
import FullSnk from './Components/FullSnk/FullSnk';
import Cart from './Container/Cart/Cart';
import Home from './Container/Home/Home';

function App() {

  return (
    <div className='wrapper'>
      <div className='wrapper-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='items/:id' element={<FullSnk/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  ); 
}

export default App;
