import { createBrowserRouter } from "react-router-dom";
import CollegeLayout from "../layout/CollegeLayout/CollegeLayout";
import RootLayout from "../layout/RootLayout";
import SchoolLayout from "../layout/SchoolLayout/SchoolLayout";
import AboutUs from "../pages/About";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/Blogs/BlogDetail";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import GalleryDetail from "../pages/Gallery/GalleryDetail";
import HomePage from "../pages/Homepage";
import Teams from "../pages/OurTeam/Teams";

const commonRoutes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "blogs/:id",
    element: <BlogDetail />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "gallery/:id",
    element: <GalleryDetail />,
  },
  {
    path: "our-team",
    element: <Teams />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/school",
    element: <SchoolLayout />,
    children: commonRoutes.map((route) => ({
      ...route,
      path: `/school/${route.path}`,
    })),
  },
  {
    path: "/college",
    element: <CollegeLayout />,
    children: commonRoutes.map((route) => ({
      ...route,
      path: `/college/${route.path}`,
    })),
  },
]);
