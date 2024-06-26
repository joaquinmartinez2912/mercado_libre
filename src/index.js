import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Electronics from './pages/electronics';
import {
  // BrowserRouter,
   RouterProvider,
  createBrowserRouter 
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/electronics",
    element: <Electronics/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
