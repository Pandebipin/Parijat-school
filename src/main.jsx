import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18.js";
import AddTeacherInfo from "./Components/AdminThing/AddTeacherInfo.jsx";
import TeacherList from "./Components/AdminThing/TeacherList.jsx";
import Addstudent from "./Components/AdminThing/Addstudents.jsx";
import StudentList from "./Components/AdminThing/studentList.jsx";
import AddItems from "./Components/AdminThing/Additems.jsx";
import BlogList from "./Components/AdminThing/Bloglist.jsx";
import Profile from "./Components/AdminThing/Profile.jsx";
const Home = React.lazy(() => import("./Pages/Home.jsx"));
const History = React.lazy(() => import("./Pages/History.jsx"));
const Teacherbio = React.lazy(() => import("./Components/Teacherbio.jsx"));
const Allteacherbio = React.lazy(() =>
  import("./Components/Allteacherbio.jsx")
);
const Blogposts = React.lazy(() => import("./Pages/Blogposts.jsx"));
const Login = React.lazy(() => import("./Pages/Login.jsx"));
const Signup = React.lazy(() => import("./Signup/Signup.jsx"));
const Singleblogpost = React.lazy(() =>
  import("./Components/Singleblogpost.jsx")
);
const Addmission = React.lazy(() => import("./Pages/Addmission.jsx"));
const Admindashboard = React.lazy(() => import("./Pages/Admindashboard.jsx"));
const Form = React.lazy(() => import("./Pages/Form.jsx"));
const Contactsection = React.lazy(() =>
  import("./Components/Contactsection.jsx")
);
const Dancingsection = React.lazy(() =>
  import("./Components/Dancingsection.jsx")
);
const Sports = React.lazy(() => import("./Components/Sports.jsx"));
const Drawing = React.lazy(() => import("./Components/Drawing.jsx"));
const AdminLogin = React.lazy(() =>
  import("./Components/AdminThing/Login.jsx")
);
const AdminSignup = React.lazy(() =>
  import("./Components/AdminThing/Signup.jsx")
);
const App = React.lazy(() => import("./App.jsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "aboutus", element: <History /> },
      { path: "signup", element: <Signup /> },
      { path: "teachers/:name", element: <Teacherbio /> },
      { path: "allteachers", element: <Allteacherbio /> },
      { path: "blogposts", element: <Blogposts /> },
      { path: "singlepost/:id", element: <Singleblogpost /> },
      { path: "addmision", element: <Addmission /> },
      { path: "admin", element: <Admindashboard /> },
      { path: "contact", element: <Contactsection /> },
      { path: "teachers/dance", element: <Dancingsection /> },
      { path: "teachers/sports", element: <Sports /> },
      { path: "teachers/drawing", element: <Drawing /> },
      { path: "teachers/form", element: <Form /> },
      { path: "adminLogin", element: <AdminLogin /> },
      { path: "adminSignup", element: <AdminSignup /> },
      { path: "Addteachers", element: <AddTeacherInfo /> },
      { path: "Addstudents", element: <Addstudent /> },
      { path: "login", element: <Login /> },
      { path: "teacherlist", element: <TeacherList /> },
      { path: "studentList", element: <StudentList /> },
      { path: "/Addblog", element: <AddItems /> },
      { path: "/bloglist", element: <BlogList /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="font-bold text-5xl flex justify-center h-screen item-center">loading</div>
      }
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
