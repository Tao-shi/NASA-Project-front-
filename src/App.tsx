import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setAuthToken } from './api';
import Protectedroute from './components/protectedroutes/protectedroute';
import Signin from './pages/signin/signin';
import Dashboard from "./pages/dashboard/dashboard";
import SignUp from "./pages/signup/signup";


function App() {
  const state = useSelector((state: RootState) => ({
    token: state.user.token,
  }))

  const { token } = state
  setAuthToken(token)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      element: <Protectedroute />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
