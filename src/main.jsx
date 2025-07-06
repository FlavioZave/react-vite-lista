import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskPage from './pages/taskPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  //Agora é aqui que esta sendo renderizado o App, pagina principal da nossa pagina
  },
  {
    path: "/task",
    element: <TaskPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
