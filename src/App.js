
import './App.css';
import Nav from './component/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/footer';
import Signup from './component/signup';
import PrivateComponent from './component/private';
import Login from './component/login';
function App() {
  return (
   
       <div>
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path='/' element={<h1>userlist component</h1>} />
          <Route path='/createUser' element={<h1>createUser</h1>} />
          <Route path='/userlist' element={<h1>userlist </h1>} />
          <Route path='/update' element={<h1>update user</h1>} />
          <Route path='/delete' element={<h1>delete user</h1>} />
          <Route path='/logout' element={<h1>logged out</h1>} />
          </Route>

          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        </BrowserRouter>
       <Footer/>
        
       </div>
  );
}

export default App;
