import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Videos from './Components/Videos/Videos';
import BlogDetails from './Components/BlogDetails/BlogDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/blog/:id' element={ <BlogDetails/>}/>
        <Route path='/videos' element={ <Videos/>}/>
        <Route path='/login' element={ <Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
