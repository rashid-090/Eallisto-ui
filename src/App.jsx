
import './App.css'
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";


import {Header, Footer} from './components';

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Contact = lazy(() => import("./pages/Contact"));

const Layout = () => {
  return(
    <div className="app 2xl:max-w-[2500px] mx-auto">
       <ToastContainer position='bottom-right' theme='dark'/>
      <Header/>
      <ScrollToTop />
      <Outlet />
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: (
          <Suspense fallback={<p>loading</p>}>
            not found
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Home/>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Product/>
          </Suspense>
        ),
      },
      {
        path: "/product/:title",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <ProductDetails/>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<p>loading</p>}>
            <Contact/>
          </Suspense>
        ),
      },
      
    ],
  },
]);   


function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App