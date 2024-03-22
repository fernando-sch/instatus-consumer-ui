import { IncidentPage } from 'incidents/pages/incidents-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{ path: '/', element: <IncidentPage /> }]);

export const ReactRouterDomProvider = () => {
  return <RouterProvider router={router} />;
};
