import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import List from './page/List';
import Add from './page/Add';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/add",
      element: <Add/>
    },
    {
      path: "/list",
      element: <List/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>{
        
      }
    </div>
  );
} 

export default App;
