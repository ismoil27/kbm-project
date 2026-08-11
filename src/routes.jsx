import { Home, AboutUs, Projects, Contact } from "@/pages";
import ProductPage from "@/pages/product";

export const routes = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "About Us", path: "/about-us", element: <AboutUs /> },
  { name: "Products", path: "/products/:slug", element: <ProductPage /> },
  { name: "Projects", path: "/projects", element: <Projects /> },
  { name: "Contact", path: "/contact", element: <Contact /> },
];

export default routes;
