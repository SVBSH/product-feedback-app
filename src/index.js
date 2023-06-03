import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Root from './routes/root/root';
import ErrorPage from './error-page';
import Roadmap from './routes/roadmap/Roadmap';
import CreateFeedback from './components/createFeedback/CreateFeedback';
// {
//   path: "feedback-detail/:feedbackId"
//   // element: <FeedbackDetail />
// },
// {
//   path: "new-feedback",
//   // element: <CreateFeedback />
// }, {
//   path: "edit-feedback/:feedbackId",
//   // element: <EditFeedback />
// }

const router = createBrowserRouter([
  {
    path: "/product-feedback-app/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product-feedback-app/roadmap",
    element: <Roadmap />
  },
  {
    path: "/product-feedback-app/new-feedback",
    element: <CreateFeedback />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
