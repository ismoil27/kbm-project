import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ socials }) {
  return (
    <footer className="relative px-4 pb-6 pt-8">
      <div className="container">
        <div className="flex p-14">
          <div className="mr-20 px-4">
            <Typography
              variant="h6"
              className="text-bold mb-4 flex items-end"
              color="blue-gray"
            >
              <p className="text-5xl text-white">KBM</p>
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              Elevate your home's protection and curb appeal with
              <br />
              our expert roofing services, ensuring your <br /> peace of mind
              under every weather condition.
            </Typography>
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name }) => (
                <a key={name} href="" target="_blank" rel="noopener noreferrer">
                  <Typography color={color} className="mr-3">
                    <i className={`fa-brands fa-${name}`} />
                  </Typography>
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-around">
            <div className="mr-28">
              <p className="mb-3 text-xl font-bold text-white">Contact Info</p>
              <p className="text_color">South Korea</p>
              <p className="text_color">07075438180</p>
              <p className="text_color">koreabuildingmaterials@gmail.com</p>
            </div>
            <div className="mr-28">
              <p className="mb-3 text-xl font-bold text-white">Quick Links</p>
              <a href="">
                <p className="text_color">
                  <a href="/">Home</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/about-us">About Us</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/products/urenthane-panel">Products</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/projects">Projects</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/contact">Contact Us</a>
                </p>
              </a>
            </div>
            <div>
              <p className="mb-3 text-xl font-bold text-white">Our Service</p>
              <a href="">
                <p className="text_color">Commercial Roofing</p>
              </a>
              <a href="">
                <p className="text_color">Residential Roofing</p>
              </a>
              <a href="">
                <p className="text_color">After Storm Damage</p>
              </a>
              <a href="">
                <p className="text_color">Finance & Insurance</p>
              </a>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-gray-300" /> */}
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className=" w-full px-4 pl-16">
            <Typography
              variant="small"
              className="text-center font-normal text-blue-gray-500"
            >
              2023 © Korea Building Materials. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description: "Sociel media logos",
  socials: [
    {
      color: "blue",
      name: "linkedin",
      path: "",
    },
    {
      color: "blue",
      name: "twitter",
      path: "",
    },
    {
      color: "blue",
      name: "instagram",
      path: "",
    },
    {
      color: "blue",
      name: "youtube",
      path: "",
    },
  ],
  menus: [
    {
      name: "",
      items: [
        { name: "Phone:" },
        { name: "+8210-6729-7757" },
        { name: "Fax:" },
        { name: "+8202-599-8736" },
        { name: "Email:" },
        { name: "ceo@jsscoutsforge.com" },
      ],
    },
    {
      name: "Address:",
      items: [
        {
          name: "14F Seoul Square, 416 Hangang-daero,",
          path: "",
        },
        {
          name: "Jung-gu, Seoul, South Korea",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year}{" "}
      <a
        href=""
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      ></a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
