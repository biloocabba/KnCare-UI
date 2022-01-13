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
import "font-awesome/css/font-awesome.min.css";
import "quill/dist/quill.core.css";
import React from "react";
import ReactDOM from "react-dom";
import "./variables/charts/chartDefaults";
// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
// react library for routing
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "redux/app";
import "select2/dist/css/select2.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "./assets/css/site.css";
// core styles
import "./assets/scss/argon-dashboard-pro-react.scss?v1.2.0";
// plugins styles downloaded
import "./assets/vendor/nucleo/css/nucleo.css";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          path="/admin"
          render={props => <AdminLayout {...props} />}
        />
        <Route path="/auth" render={props => <AuthLayout {...props} />} />
        <Route path="/" render={props => <AdminLayout {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    <ToastContainer />
  </Provider>,
  document.getElementById("root"),
);
