import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//services 
// se
import { getBooking } from './services/booking.service';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Screens
import BookingsScreen from './screens/bookings';
import BookingScreen from './screens/booking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookingsScreen/>,
  },
  {
    path: "/booking/:id",
    loader: async ({params}) =>{
      return getBooking(params.id).then(
        (response)=>response.data,
        (error)=>error
      )
    },
    element: <BookingScreen/>,
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
