import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Main></Main>
      },
      {
        path:"/login",
        element:<Login></Login>
      }, 
      {
        path:"/register", 
        element: <Register></Register>
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>,
)
