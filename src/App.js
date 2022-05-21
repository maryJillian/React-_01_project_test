import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*'
                 element={<DialogsContainer/>}/>
          <Route path='/profile/*'
                 element={<ProfileContainer/>}/>
          <Route path='/profile/:userId?'
                 element={<ProfileContainer/>}/>
          <Route path='/users'
                 element={<UsersContainer/>}/>
          <Route path='/login'
                 element={<Navigate to="/Login" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
