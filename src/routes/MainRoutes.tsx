import { Route, Routes } from "react-router";
import { ProtectsRoutes } from "../Components/ProtectsRoutes";
import { CartProvider } from "../context/CartContext";
import { Dash } from "../pages/Dash";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectsRoutes />}>
        <Route
          path="/dashboard"
          element={
            <CartProvider>
              <Dash />
            </CartProvider>
          }
        />
      </Route>
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
