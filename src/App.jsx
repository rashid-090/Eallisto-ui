import "./App.css";
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import { Header, Footer, Loading } from "./components";

const PNF = lazy(() => import("./pages/pagenot"));
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const InvestorRelations = lazy(() => import("./pages/InvestorRelations"));
const SustainabilityESG = lazy(() => import("./pages/Sustainability-esg"));
const Career = lazy(() => import("./pages/Career"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const Layout = () => {
  return (
    <div className="app 2xl:max-w-[2500px] mx-auto">
      <ToastContainer position="bottom-right" theme="dark" />
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Suspense fallback={<Loading />}><PNF/></Suspense>,
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/product/:slug",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/investor-relations",
        element: (
          <Suspense fallback={<Loading />}>
            <InvestorRelations />
          </Suspense>
        ),
      },
      {
        path: "/sustainability-and-esg",
        element: (
          <Suspense fallback={<Loading />}>
            <SustainabilityESG />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: (
          <Suspense fallback={<Loading />}>
            <Career />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <>
      <Loading />
      </>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;