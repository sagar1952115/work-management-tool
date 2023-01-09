import { useContext, useEffect } from "react";
import { DataContext } from "./context/context";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import ProtectedRoute from "./ProtectedRoute";
// import Project from "./pages/Project";

function App() {
  const { user, dispatch } = useContext(DataContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("data");
    console.log("Data found");
    console.log(JSON.parse(loggedInUser));
    if (loggedInUser) {
      dispatch({ type: "INIT", payload: JSON.parse(loggedInUser) });
    }
  },[]);
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Todos />} />
      </Route>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
    </Routes>
  );
}

export default App;
