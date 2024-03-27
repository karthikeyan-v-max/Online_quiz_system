import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home'
import { useContext } from 'react';
import { AuthContext } from './components/AuthContext';

function App() {
  const currentUser = useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    return currentUser ? children:<Navigate to="/login"></Navigate>
  }
  return (
    <div >
      <Routes>
        <Route path='/'>
          <Route path='login' element={<Login/>}/>
          <Route path='signin' element = {<SignIn/>}/>
          <Route index element = {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
      }/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
