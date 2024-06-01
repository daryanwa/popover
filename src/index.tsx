import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
// import  store  from '../src/store/index';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
  },
  {},
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={route}></RouterProvider>
    </React.StrictMode>
  </Provider>
);
