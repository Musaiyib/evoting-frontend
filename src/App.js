import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import VotingPage from './Pages/VotingPage';
import Home from './Pages/Home';
import VoterLogin from './Pages/VoterLogin';
import ElcomLogin from './Admin/Pages/ElcomLogin';
import Dashboard from './Admin/Pages/Dashboard';
import React from 'react';
import ContextApi from './ContextApi';
import ProtectedRoutes from './Admin/Components/ProtectedRoutes';
import ProtectVoting from './Components/ProtectVoting'
import ElcomSignup from './Admin/Pages/Signup';
import { useSelector } from 'react-redux';

const App = () => {
  
  const { user } = useSelector(state => state.auth)
  const [Values, SetValues] = React.useState([])

  return (
    <ContextApi.Provider value={{ Values, SetValues }}>

      <div className="App">
        <BrowserRouter>
          <Routes>
            {/*voters dashboard  */}
            <Route path="*" element={<Navigate to='/' replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<VoterLogin />} />
            <Route path='/voting' element={<ProtectVoting user={user} />}>
              <Route path="" element={<VotingPage />} />
            </Route>

            {/* pages  */}
            <Route path="/elcom">
              {/* elecom login */}
              <Route path='' element={<ElcomLogin />} />
              <Route path='register' element={<ElcomSignup />} />
              {/* admin routes */}
              <Route element={<ProtectedRoutes user={user} />}>
                <Route path='dashboard/*' element={<Dashboard />} />
                <Route path='generate' element={<ElcomLogin />} />
                <Route path="manage" element={<ElcomLogin />} />
                <Route path="voters" element={<VotingPage />} />
              </Route>
            </Route>
          </Routes>
          {/* )
        } */}
        </BrowserRouter >
      </div >
    </ContextApi.Provider>
  );
}

export default App;
