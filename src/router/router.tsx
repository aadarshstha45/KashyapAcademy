import { createBrowserRouter } from "react-router-dom";
import CollegeLayout from "../layout/CollegeLayout/CollegeLayout";
import RootLayout from "../layout/RootLayout";
import SchoolLayout from "../layout/SchoolLayout/SchoolLayout";
import AboutUs from "../pages/About";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/Blogs/BlogDetail";
import { Contact } from "../pages/Contact";
import { Events } from "../pages/Events";
import { Gallery } from "../pages/Gallery";
import { GalleryDetail } from "../pages/Gallery/GalleryDetail";
import { HomePage } from "../pages/Homepage";
import { Teams } from "../pages/OurTeam/Teams";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/school",
    element: <SchoolLayout />,
    children: [
      {
        path: "/school",
        element: <HomePage />,
      },
      {
        path: "/school/about",
        element: <AboutUs />,
      },
      {
        path: "/school/contact",
        element: <Contact />,
      },
      {
        path: "/school//events",
        element: <Events />,
      },
      {
        path: "/school//blogs",
        element: <Blogs />,
      },
      {
        path: "/school//blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/school//gallery",
        element: <Gallery />,
      },
      {
        path: "/school//gallery/:id",
        element: <GalleryDetail />,
      },
      {
        path: "/school//our-team",
        element: <Teams />,
      },
    ],
  },
  {
    path: "/college",
    element: <CollegeLayout />,
    children: [
      {
        path: "/college",
        element: <HomePage />,
      },
      {
        path: "/college/about",
        element: <AboutUs />,
      },
      {
        path: "/college/contact",
        element: <Contact />,
      },
      {
        path: "/college//events",
        element: <Events />,
      },
      {
        path: "/college//blogs",
        element: <Blogs />,
      },
      {
        path: "/college//blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/college//gallery",
        element: <Gallery />,
      },
      {
        path: "/college//gallery/:id",
        element: <GalleryDetail />,
      },
      {
        path: "/college//our-team",
        element: <Teams />,
      },
    ],
  },
]);
