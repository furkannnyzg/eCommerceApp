import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home';
import NotFoundPage from './pages/NotFoundPage';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import LoginPage from './pages/login';

import Register from './pages/register';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFoundPage/>,
    
    
    children: [
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      
      {

        path: "/login",
        element: <LoginPage/>,
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
  {
    path:'/home',
    element:<Home/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <RouterProvider router={router}/>
    
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
