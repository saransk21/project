import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';
import Episodes from './pages/Episodes';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Profile/>} />
        <Route path='/:id' element={<Episodes />}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
