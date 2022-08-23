import { BrowserRouter, Routes, Route, } from "react-router-dom";

import NavList from "./Components/NavList/NavList";
import Header from "./Components/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import NotFound from "./Pages/Other/NotFound";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavList />
      <div className="rightSection">
      <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;