import React from 'react';
import ReactDOM from 'react-dom/client';

/** */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
/** */

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Root, { 
  loader as rootLoader,
  action as rootAction
} from './routes/Root';

import Contact, {
      loader as contactLoader,
      action as contactAction,
    } from './routes/Contact';

import ErrorPage from './pages/ErrorPage';
import EditContact, {
  action as editAction,
}from "./routes/Edit";

import { action as destroyAction } from "./routes/Destroy";
import Index from "./routes/Index";

/** */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    loader: rootLoader,   //assign rootLoader data to React loader 
                          //so can use that data using hook (useLoaderData)
    action: rootAction,
    children: [
      { 
        index: true,
        element: <Index /> 
      },
      {
        path: "contacts/:contactId",
        element: <Contact/>,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        // errorElement: <h1>there is something wrong</h1>
      },
    ],
  },
]);
/** */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
        {/* <App /> */}
    </RouterProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
