import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav1 from "./Componets/SideNav";
import Dashboard_layout from "./Componets/Dashboard_layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Transaction from "./Pages/Transaction/Transaction";
import Services from "./Pages/Services/Services";
import SignUp from "./Pages/SignUpPage/SignUp";
import Login from "./Pages/LoginPage/Login";
import EmailVerification from "./Pages/SignUpPage/Components/EmailVerification";
import ForgotPassword from "./Pages/LoginPage/Components/ForgotPassword";
import LogInSuccess from "./Pages/LoginPage/Components/LogInSuccess";
import SignInSuccess from "./Pages/SignUpPage/Components/SignInSuccess";
import ResetPassword from "./Pages/LoginPage/Components/ResetPassword";
import PasswordResetDone from "./Pages/LoginPage/Components/PasswordResetDone";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/loginSuccess",
    element: <LogInSuccess />,
  },

  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },

  {
    path: "/resetdone",
    element: <PasswordResetDone />,
  },

  ////signup//////////////////////////////////////

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/emailverification",
    element: <EmailVerification />,
  },
  {
    path: "/signinsuccess",
    element: <SignInSuccess />,
  },

  {
    path: "/Dashboard",
    element: <Dashboard_layout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: "Transaction",
        element: <Transaction />,
      },
      {
        path: "Services",
        element: <Services />,
      },
    ],
  },
]);
function App() {
  return <></>;
}

export default App;
