import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contacts/Contact.jsx";
import User from "./components/User/User.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import ForgotPassword from "./components/ForgatePassword/ForgatePassword.jsx";
import { Route } from "react-router-dom"; // this line also for the down side code . line number 41
import Github from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//    path: '/',
//    element: <Layout />,
//    children: [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "About",
//       element: <About/>
//     },
//     {
//       path: "Contact",
//       element: <Contact/>
//     },
//     {
//       path: "User:/userid",
//       element: <User/>
//     }
//    ]

//   }
// ])
//  down side also same process

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="register" element={<Register />} />
      <Route path="User/:userid" element={<User />} />
      {/* <Route path="/" element={<Nav />} /> */}
      <Route
        // loader={GithubInfoLoader}
        path="Github"
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
