import { BrowserRouter, Routes, Route, } from "react-router-dom";

import NavList from './components/NavList/NavList';
import Main from './components/Main/Main';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavList />
      <Main />
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
