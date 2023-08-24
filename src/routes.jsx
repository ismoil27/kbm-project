import { Home, AboutUs, Projects, Contact, Services } from "@/pages";

export const routes = [
  {
    name: "",
    path: "/",
    element: <Home />,
  },
  {
    name: "about-us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Projects",
    path: "/projects",
    element: <Projects />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
