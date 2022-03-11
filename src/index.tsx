import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "redux/app";

import { AlertProvider } from "context";

import "variables/chartDefaults";
import { Router } from "./Router";

import "./assets/css/argon-dashboard-pro-react.css";
import "./assets/css/site.css";
import "./assets/vendor/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-notification-alert/dist/animate.css";
import "sweetalert2/dist/sweetalert2.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AlertProvider>
          <Router />
        </AlertProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
