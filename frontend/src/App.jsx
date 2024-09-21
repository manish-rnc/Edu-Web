import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Tutor from './pages/Tutor/Tutor';
import Learner from './pages/Learner/Learner';
import Home from './pages/Home';
import Register from './pages/Register';
import Header from './components/Header';
import AllSubjects from './pages/Tutor/AllSubjects';

function App() {

  return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/tutor' element={<Tutor />}/>
            <Route path='/tutor/allSubjects' element={<AllSubjects />}/>
            <Route path='/learner' element={<Learner />}/>
          </Routes>
        </Router>
      </>
  )
}

export default App;
