import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Outlet } from "react-router-dom";
// import DefaultFORM from "./pages/DefaultFORM";

import { Toaster } from "react-hot-toast";

import { Header, Footer } from "./components/index";
import { login, logout } from "./store/authSlice";

import "./App.css";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen content-between flex flex-wrap  bg-white">
      <div className="w-full block">
        <Header />
        <Toaster position="top-right" reverseOrder={false} />
        <main>
          {/* <DefaultFORM /> */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
