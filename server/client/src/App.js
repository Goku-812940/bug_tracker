import './App.css';
import './components/Bugs'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Bugs from './components/Bugs';
import AddBug from './components/AddBug';
import BugDetails from './components/BugDetails';
import UpdateBug from './components/UpdateBug';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      
      <Routes>
     
        <Route path='/' element={<Bugs/>}/>
        <Route path='/addBug' element={<AddBug/>}/>
        <Route path='/bugDetails/:id' element={<BugDetails/>}/>
        <Route path='/updateBug/:id' element={<UpdateBug/>}/>

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
