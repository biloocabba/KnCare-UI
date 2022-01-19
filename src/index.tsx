/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";

import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "select2/dist/css/select2.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "font-awesome/css/font-awesome.min.css";
import "quill/dist/quill.core.css";
import "react-toastify/dist/ReactToastify.css";

import "./assets/css/site.css";
import "./assets/scss/argon-dashboard-pro-react.scss?v1.2.0";
import "./assets/vendor/nucleo/css/nucleo.css";
import "./variables/charts/chartDefaults";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import {AdminLayout,AuthLayout} from "layouts";

import { store } from "redux/app";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <StrictMode>
      <Switch>
        <Route
          path="/admin"
          render={() => <AdminLayout />}
        />
        <Route path="/auth"  render={() => <AuthLayout />} />
        <Route path="/"  render={() => <AdminLayout />} />
        <Redirect from="*" to="/" />
      </Switch>
    </StrictMode>
    </BrowserRouter>
    <ToastContainer />
  </Provider>,
  document.getElementById("root"),
);
