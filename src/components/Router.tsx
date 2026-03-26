import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import PricingPage from '@/components/pages/PricingPage';
import StartPage from '@/components/pages/StartPage';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/components/pages/TermsOfServicePage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: 'pricing',
        element: <PricingPage />,
        routeMetadata: {
          pageIdentifier: 'pricing',
        },
      },
      {
        path: 'start',
        element: <StartPage />,
        routeMetadata: {
          pageIdentifier: 'start',
        },
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
        routeMetadata: {
          pageIdentifier: 'privacy-policy',
        },
      },
      {
        path: "terms-of-service",
        element: <TermsOfServicePage />,
        routeMetadata: {
          pageIdentifier: 'terms-of-service',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
