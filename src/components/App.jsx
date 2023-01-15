import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import AppBar from './AppBar/AppBar';
import Register from 'pages/Register';
import Login from 'pages/Login';
import PublicRoute from './UserMenu/PublicRoute';

export function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Wait a minute...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<PublicRoute component={<Login />} />}
          />
          <Route
            path="/register"
            element={<PublicRoute path="/register" component={<Register />} />}
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
