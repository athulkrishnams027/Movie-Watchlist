import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './component/NavBar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import './App.css';

function App() { 
  
  const [users, setUsers] = useState([]);

  return (
    <>
      {/* <AppNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList users={users} setUsers={setUsers} />} />
        <Route path="/add" element={<AddUser users={users} setUsers={setUsers} />} />
        <Route path="/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
      </Routes>
    </>
  );
}

export default App;