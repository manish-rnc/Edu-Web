import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './App.css';
import Tutor from './pages/Tutor/Tutor';
import Learner from './pages/Learner/Learner';
import Home from './pages/Home';
import Header from './components/Header';
import AllSubjects from './pages/Tutor/AllSubjects';
import StudentList from './pages/Tutor/StudentList';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tutor' element={<Tutor />} />
          <Route path='/tutor/subjects' element={<AllSubjects />} />
          <Route path='/tutor/students' element={<StudentList />} />
          <Route path='/learner' element={<Learner />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  return location.pathname !== '/' ? <Header /> : null;
}

export default App;
