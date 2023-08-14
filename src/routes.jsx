import {
  Home,
  Services,
  JoinUs,
  About,
  Contact,
  Clients,
  Candidates,
} from "@/pages";

export const routes = [
  {
    name: "",
    path: "/",
    element: <Home />,
  },
  {
    name: "About Company",
    path: "/about-company",
    element: <About />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Clients and Candidates",
    path: "/clients",
    element: <Clients />,
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
