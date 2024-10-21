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
import StudentList from './pages/Tutor/StudentList';
import UserContextProvider from './context/UserContext';

function App() {

  return (
      <UserContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/tutor' element={<Tutor />}/>
            <Route path='/tutor/subjects' element={<AllSubjects />}/>
            <Route path='/tutor/students' element={<StudentList />}/>
            <Route path='/learner' element={<Learner />}/>
          </Routes>
        </Router>
      </UserContextProvider>
  )
}

export default App;
