import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
import Ourstore from './components/Ourstore';
import About from './components/About';
import Login from './components/Login';
import store from './store';
import { Provider } from "react-redux";
import Signup from './components/Signup';


const router=createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children: [
      {
        path:"",
        element:<Cards/>
      },
      {
        path:"cart/:id",
        element:<CardsDetails/>
      },
      {
        path:"ourstore",
        element:<Ourstore />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"signup",
        element:<Signup />
      }
    ]

}
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

