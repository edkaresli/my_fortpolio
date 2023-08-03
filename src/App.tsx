
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/Root.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import Project from './routes/Project.tsx';
import Videos from './routes/Videos.tsx';
import Video from './components/Video.tsx';
import Projects from './routes/Projects.tsx';
import ContactMe from './routes/ContactMe.tsx';
import Footer from './components/Footer.tsx';

import videos from './data/videos';
import './index.css';
import MainContent from './routes/MainContent.tsx';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContent />,
        children: [
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/projects/project/:projectId",
            element: <Project />
          },
          {
            path: "/videos/",
            element: <Videos videos={videos}/>,
            children: [
              {
                path: "/:videoId",
                element: <Video />              
              }
            ]
          },
          {
            path: "/contact-me",
            element: <ContactMe />,
          },
          {
            element: <Footer />,
          }
        ]
      },
      
    ]
  },  
]);

function App() {
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
