import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Signup from './component/Signup';
import App from './App';
import Error from './component/Error';
import { Provider } from 'react-redux';
import Store from './redux/Store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <Error/>,
    children: [
    {
      path : '/',
      element : <Login/>
    },
    {
      path : 'signup',
      element : <Signup/>
    },
    {
      path : 'dashboard',
      element : <Dashboard/>
    }
  ]
  }
],{
  // basename: '/mern/stock-calculator/'
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}><RouterProvider router={router} /></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
