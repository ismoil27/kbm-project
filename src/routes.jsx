import { Home, AboutUs, JoinUs, Contact, Services, Candidates } from "@/pages";

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
    name: "Join Us",
    path: "/join-us",
    element: <JoinUs />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
