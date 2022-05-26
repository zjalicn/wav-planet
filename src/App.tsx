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
import { products } from "./helpers";
import { Layout, RequireAuth } from "./components";

export const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/" element={<Layout />}>
        {/* Public Routes*/}
        <Route path="store" element={<StorePage products={products} />} />
        <Route path="checkout" element={<CheckoutPage products={products} />} />
        <Route path="login" element={<LogInSignUpPage />} />
        <Route
          path="product/:pid"
          element={<ProductPage product={products[0]} />}
        />

        {/* Protected Routes*/}
        <Route element={<RequireAuth />}>
          <Route
            path="downloads"
            element={<DownloadsPage products={products} />}
          />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        {/* Catch all*/}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
