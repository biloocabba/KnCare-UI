import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { store } from "redux/app";

import { AlertProvider } from "context";
import { AdminLayout, AuthLayout } from "layouts";

import "variables/chartDefaults";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-dashboard-pro-react.css";
import "./assets/css/site.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AlertProvider>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<AdminLayout />} />
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/auth" element={<AuthLayout />} />
          </Routes>
        </AlertProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
