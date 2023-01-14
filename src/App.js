
import './App.css';
import Nav from './component/navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/footer';
import Signup from './component/signup';
import PrivateComponent from './component/private';
import Login from './component/login';
import AddBook from './component/addbook';
import Booklist from './component/booklist';
function App() {
  return (
   
       <div>
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
          <Route path='/' element={<h1>userlist component</h1>} />
          <Route path='/Booklist' element={<Booklist />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/updatebook' element={<h1>update </h1>} />
          <Route path='/deletebook' element={<h1>delete </h1>} />
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
