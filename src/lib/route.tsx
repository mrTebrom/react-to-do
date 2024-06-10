import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const route = createBrowserRouter([{ index: true, element: <App /> }]);

export const Routes = () => {
  return <RouterProvider router={route} />;
};
