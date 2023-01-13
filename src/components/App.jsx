import Wrapper from './Wrapper/Wrapper.styled';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import AppBar from './AppBar/AppBar';
import Register from 'pages/Register';
import Login from 'pages/Login';

export function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Wait a minute...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
