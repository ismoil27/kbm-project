import {
  Home,
  AboutUs,
  Projects,
  Contact,
  Services,
  Candidates,
} from "@/pages";

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
    name: "Clients and Candidates",
    path: "/candidates",
    element: <Candidates />,
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
