
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Nav1 from './components/Nav1';
import Food from './components/Food';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import UpdateFood1 from './components/UpdateFood1';
import FoodReport from './components/FoodReport';
import Searchfood from './components/Searchfood';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>FOOD APP</h1>
      {/* <Nav1 /> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/nav1" element={<Nav1/>}/>
      <Route path='/food' element={<Food/>}>
      <Route path="addfood" element={<AddFood/>}/>
      <Route path="viewfood" element={<FoodReport/>}/>
      <Route path="updatefood" element={<UpdateFood1/>}/>
      <Route path="searchfood" element={<Searchfood/>}/>
      <Route path="deletefood" element={<DeleteFood/>}/>
      </Route>
      </Routes>
      {/* <Login/>
      <SignUp/> */}
    </div>
    
  );
}

export default App;
