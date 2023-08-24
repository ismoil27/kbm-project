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
              Ornare nunc sodales elementum, <br /> fusce dolor platea quam ac
              porta id <br />
              dolor leo libero laoreet aliquet.
            </Typography>
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name }) => (
                <a
                  key={name}
                  href="https://www.linkedin.com/company/js-scouts-forge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <p className="text_color">123 5th Ave, New York, NY 10021</p>
              <p className="text_color">+1 123 456 7890</p>
              <p className="text_color">info@example.com</p>
            </div>
            <div className="mr-28">
              <p className="mb-3 text-xl font-bold text-white">Quick Links</p>
              <a href="">
                <p className="text_color">Home</p>
              </a>
              <a href="">
                <p className="text_color">About Us</p>
              </a>
              <a href="">
                <p className="text_color">Services</p>
              </a>
              <a href="">
                <p className="text_color">Projects</p>
              </a>
              <a href="">
                <p className="text_color">Contact Us</p>
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
              className="font-normal text-blue-gray-500"
            >
              2023 © KBM
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
