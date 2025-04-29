import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './Pages/SignIn.jsx';
import Documentation from './Pages/Documentation.jsx';
import Register from './Pages/Register.jsx';
import FeatureSection from './components/FeatureSection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/signIn",
    element: <SignIn />
  },
  {
    path: "/Documentation",
    element: <Documentation />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/FeatureSection",
    element: <FeatureSection />
  }
], {
  future: {
    v7_startTransition: true,       
    v7_skipActionErrorRevalidation: true,
    v7_relativeSplatPath: true,     
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,   
    v7_partialHydration: true       
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);