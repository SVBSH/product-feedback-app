import { createBrowserRouter } from "react-router-dom";
import Root from './routes/root/root';
import EditFeedback from './routes/editFeedback/EditFeedback';
import ErrorPage from './error-page';
import Roadmap from './routes/roadmap/Roadmap';
import CreateFeedback from './routes/createFeedback/CreateFeedback';
import FeedbackDetail from './routes/feedbackDetail/FeedbackDetail';


export const routesConfiguration = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/roadmap",
      element: <Roadmap />
    },
    {
      path: "/new-feedback",
      element: <CreateFeedback />
    },
    {
      path: "/edit-feedback/:id",
      element: <EditFeedback feedbackTitle={"Add a dark theme option"} />
    },
    {
      path: "feedback-detail/:id",
      element: <FeedbackDetail />
    }
  ]);