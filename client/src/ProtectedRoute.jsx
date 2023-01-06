import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { DataContext } from "./context/context";

function ProtectedRoute() {
  const { user } = useContext(DataContext);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
