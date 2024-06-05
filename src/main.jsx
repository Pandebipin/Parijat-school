import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import History from "./Pages/History.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import Teacherbio from "./Components/Teacherbio.jsx";
import Allteacherbio from "./Components/Allteacherbio.jsx";
import Blogposts from "./Pages/Blogposts.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Signup/Signup.jsx";
import Singleblogpost from "./Components/Singleblogpost.jsx";
import "./i18.js";
import Addmission from "./Pages/Addmission.jsx";
import Admindashboard from "./Pages/Admindashboard.jsx";
import Form from "./Pages/Form.jsx";
import Contactsection from "./Components/Contactsection.jsx";
import Dancingsection from "./Components/Dancingsection.jsx";
import Sports from "./Components/Sports.jsx";
import Drawing from "./Components/Drawing.jsx";
const App = React.lazy(() => import("./App.jsx"));
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
        path: "/Aboutus",
        element: <History />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/teachers/:name",
        element: <Teacherbio />,
      },
      {
        path: "/allteachers",
        element: <Allteacherbio />,
      },
      {
        path: "/blogposts",
        element: <Blogposts />,
      },
      {
        path: "/singlepost/:id",
        element: <Singleblogpost />,
      },
      {
        path: "/addmision",
        element: <Addmission />,
      },
      {
        path: "/admindashborad",
        element: <Admindashboard />,
      },
      {
        path: "/contact",
        element: <Contactsection />,
      },
      {
        path: "/teachers/Dance",
        element: <Dancingsection />,
      },
      {
        path: "/teachers/sports",
        element: <Sports />,
      },
      {
        path: "/teachers/Drawing",
        element: <Drawing />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
]);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="font-bold text-5xl flex justify-center">loading</div>
      }
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
