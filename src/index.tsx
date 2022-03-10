// @todo remove this line after migrating to react router v6
/* eslint-disable react/no-children-prop */
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

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

import "components/widgets/react-table/styles/reactTable.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <AlertProvider>
          <Switch>
            <Route path="/admin" children={<AdminLayout />} />
            <Route path="/auth" children={<AuthLayout />} />
            <Route path="/" children={<AdminLayout />} />
            <Redirect from="*" to="/" />
          </Switch>
        </AlertProvider>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
