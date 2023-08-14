import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import logo from "../../../public/img/logo.jpg";

const year = new Date().getFullYear();

export function Footer({ socials, menus }) {
  return (
    <footer className=" relative px-4 pb-6 pt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography
              variant="h6"
              className="text-bold mb-4 flex items-end"
              color="blue-gray"
            >
              <img className="mr-4 h-12 w-12" src={logo} alt="logo" />
              We create opportunities for people to reach their potential
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              Merging your vision and our expertise, we help you achieve
              powerful results! <br />
              We provide a full cycle of HR solution services such as
              recruitment, job searches, career advice, CV writing, career
              coaching, outplacement, and training. <br />
              Solutions that Deliver Next-Level Insights and Powerful Results.
            </Typography>
            <div className="mx-auto mb-8 mt-6 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name }) => (
                <a
                  key={name}
                  href="https://www.linkedin.com/company/js-scouts-forge/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="gap-15 mx-auto mt-12 grid w-max grid-cols-2 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium "
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        // target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="text-bold  mb-2 block font-normal "
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              2023 © JS Scouts Forge - HR Recruiting Company
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
