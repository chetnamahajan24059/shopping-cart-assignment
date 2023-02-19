import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LazyLoader, Header, AppFooter, PageLoader } from "../pages/common";
import { getToken } from "../utils";
import "./routes.scss";

const NoMatch = LazyLoader(() => import("../pages/NoMatch"));
const Cart = LazyLoader(() => import("../pages/Cart"));
const Home = LazyLoader(() => import("../pages/Home"));
const Login = LazyLoader(() => import("../pages/Login"));
const Register = LazyLoader(() => import("../pages/Register"));

const AppRoutes = () => {
  const token = getToken();
  return (
    <BrowserRouter>
      <Header />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={token ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/register"
            element={token ? <Navigate to="/" replace /> : <Register />}
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <AppFooter />
      <PageLoader />
    </BrowserRouter>
  );
};

export default AppRoutes;
