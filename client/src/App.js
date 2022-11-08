import React from 'react'
import {Routes, Route } from 'react-router-dom';
// import Main from './views/Main';
// import Update from './views/Update'
// import New from './views/New'
import LoginView from './views/loginView'
import Main from './views/Main';
import New from './views/New'
import View from './views/View'
function App() {
  return (
    <div className="App">
    <Routes>
    <Route element = {<LoginView />} path="/" />
    <Route element = {<Main />} path="/pirates" />
    <Route element = {<New />} path="/new" />
    <Route element = {<View />} path="/pirate/:id" />
    </Routes>
  </div>
  );
}

export default App;