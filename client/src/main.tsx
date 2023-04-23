import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import axios from "axios";

axios.defaults.baseURL =
    process.env.NODE_ENV === "development" ? "http://localhost:4000" : "/";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route index={true} element={<HomePage />} />
            <Route path="product/:slug" element={<ProductPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
