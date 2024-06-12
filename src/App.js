import logo from './logo.svg';
import './App.css';
import AddCours from './components/AddCours';
import SearchCours from './components/SearchCours';
import DeleteCours from './components/DeleteCours';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCours/>}/>
      <Route path='/SearchCours' element={<SearchCours/>}/>
      <Route path='/DeleteCours' element={<DeleteCours/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
