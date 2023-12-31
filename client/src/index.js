import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/website/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login"
import Store from './store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/register",
        element: <Register />
      },
      {
        path:"/login",
        element: <Login />
      }
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      {/* <Provider store={Store}> */}
        <RouterProvider router={router} />
      {/* </Provider> */}
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
