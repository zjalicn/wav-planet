import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import {
  CheckoutPage,
  DownloadsPage,
  ErrorPage,
  HomePage,
  LogInSignUpPage,
  ProductPage,
  SettingsPage,
  StorePage,
} from "./pages";
import { Layout, RequireAuth } from "./components";

export const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/" element={<Layout />}>
        {/* Public Routes*/}
        <Route path="store" element={<StorePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="login" element={<LogInSignUpPage />} />
        <Route path="product/:pid" element={<ProductPage />} />

        {/* Protected Routes*/}
        <Route element={<RequireAuth />}>
          <Route path="downloads" element={<DownloadsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Catch all*/}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
