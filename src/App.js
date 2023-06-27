import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Episodes from './components/Episodes';



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
