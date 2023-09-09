import { Home, AboutUs, Projects, Contact, Products } from "@/pages";
import UrenthanPanel from "./pages/urenthan-panel";
import GlassWoolPanel from "./pages/glass-wool-panel";
import EpsPanel from "./pages/eps-panel";
import MetalPanel from "./pages/metal-panel";
import Others from "./pages/others";

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
    name: "Products",
    path: "/products/urenthane-panel",
    element: <UrenthanPanel />,
  },
  {
    name: "Products",
    path: "/products/glass-wool-panel",
    element: <GlassWoolPanel />,
  },
  {
    name: "Products",
    path: "/products/eps-panel",
    element: <EpsPanel />,
  },
  {
    name: "Products",
    path: "/products/metal-panel",
    element: <MetalPanel />,
  },
  {
    name: "Products",
    path: "/products/others",
    element: <Others />,
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
