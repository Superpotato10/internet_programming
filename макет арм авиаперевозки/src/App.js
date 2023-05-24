import './App.css';
import Login from './components/Login'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Root from './components/Root'
import Customers from './components/Customers'
import Employees from './components/Employees'

import Admin from './components/Admin'
import LoaltyProgram from './components/LoaltyProgram';
import Operations from './components/Operations';
import Routes from './components/Routes';
import Flights from './components/Flights'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/employees',
          element: <Employees/>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/customers',
          element: <Customers/>
        },
        {
          path: '/admin',
          element: <Admin/>
        },
        {
          path: '/loaltyProgram',
          element: <LoaltyProgram/>
        },
        {
          path: '/',
          element: <Operations/>
        },
        {
          path: '/routes',
          element: <Routes/>
        },
        {
          path: '/flights',
          element: <Flights/>
        },
      ]
    }
  ]
)


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
