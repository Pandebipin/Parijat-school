// App.jsx

import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";
import "./App.css";

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import AdminSidebar from "./Components/AdminThing/AdminSidebar";
import Header from "./Components/AdminThing/Header";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setIsAdmin(user.email === "admin12@gmail.com");
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (themeMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeMode]);

  useEffect(() => {
    if (isAuthenticated) {
      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, isAdmin, navigate]);

  const AdminLayout = () => (
    <div className="min-h-[80vh] z-10">
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      <div className="flex gap-12">
        <div className="sidebar1 mt-12 z-0 w-[20%]">
          <AdminSidebar />
        </div>
        <div className="content1 mt-4 gap-5">
          <Outlet />
        </div>
      </div>
    </div>
  );

  const UserLayout = () => (
    <>
      <Nav />
      <div className="content mx-auto mb-4 mt-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );

  return (
    <main
      className={`bg-gray-200 ${
        themeMode ? "dark:bg-gray-800 text-white" : "text-gray-800"
      }`}
    >
      {isAuthenticated ? (
        isAdmin ? (
          <AdminLayout />
        ) : (
          <UserLayout />
        )
      ) : (
        <UserLayout />
      )}
    </main>
  );
}

export default App;
