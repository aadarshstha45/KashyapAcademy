/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
const NoticePage = lazy(() => import("../pages/Notice"));
const SchoolLayout = lazy(() => import("../layout/SchoolLayout/SchoolLayout"));
const RootLayout = lazy(() => import("../layout/RootLayout"));
const AboutUs = lazy(() => import("../pages/About"));
const BlogDetail = lazy(() => import("../pages/Blogs/BlogDetail"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Contact = lazy(() => import("../pages/Contact"));
const Downloads = lazy(() => import("../pages/Downloads"));
const Events = lazy(() => import("../pages/Events"));
const Gallery = lazy(() => import("../pages/Gallery"));
const GalleryDetail = lazy(() => import("../pages/Gallery/GalleryDetail"));
const HomePage = lazy(() => import("../pages/Homepage"));
const OurTeam = lazy(() => import("../pages/OurTeam"));
const CollegeLayout = lazy(
  () => import("../layout/CollegeLayout/CollegeLayout")
);

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
    element: <OurTeam />,
  },
  {
    path: "downloads",
    element: <Downloads />,
  },
  {
    path: "notice",
    element: <NoticePage />,
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
