import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export function ProtectsRoutes() {
  const { isUserAuth, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return isUserAuth ? <Outlet /> : <Navigate to={"/"} />;
}
