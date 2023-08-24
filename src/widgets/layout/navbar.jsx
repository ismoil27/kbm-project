import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dropdown } from "antd";

import brandLogo from "../../../public/img/favicon.png";

export function Navbar({ brandName, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // const items = [
  //   {
  //     label: (
  //       <Link
  //         to={"/clients"}
  //         className="flex items-center gap-1 p-1 font-normal"
  //       >
  //         Clients
  //       </Link>
  //     ),
  //     key: "0",
  //   },
  //   {
  //     label: (
  //       <Link
  //         to={"/candidates"}
  //         className="flex items-center gap-1 p-1 font-normal"
  //       >
  //         Candidates
  //       </Link>
  //     ),
  //     key: "1",
  //   },
  // ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link
          to={"/"}
          className="flex items-center gap-1 p-1 text-xl font-normal"
        >
          <img src={brandLogo} alt="" width={90} />
        </Link>
      </Typography> */}

      <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link
          to={"/"}
          className="flex items-center gap-1 p-1 text-xl font-normal"
        >
          {" "}
          Home
        </Link>
      </Typography>
      <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link
          to={"/about-us"}
          className="flex items-center gap-1 p-1 text-xl font-normal"
        >
          About Us
        </Link>
      </Typography>
      {/* <Dropdown
        menu={{
          items,
        }}
        trigger={["click", "hover"]}
      > */}
      <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="cursor-pointer text-xl font-normal capitalize"
      >
        <Link
          to={"/services"}
          className="flex items-center gap-1 p-1 text-xl font-normal"
        >
          Services
        </Link>
      </Typography>
      {/* </Dropdown> */}
      <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link
          to={"/projects"}
          className="flex items-center gap-1 p-1 text-xl font-normal"
        >
          Projects
        </Link>
      </Typography>
      <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link
          to={"/contact"}
          className="flex items-center gap-1 p-1 text-xl font-normal"
        >
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="ml-2 mr-4 cursor-pointer py-1.5 text-2xl font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className={`rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900 lg:hidden`}
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "KBM",
  className: "text-xl",
  action: (
    <a href="/contact" target="">
      {/* <Button variant="gradient" size="sm" fullWidth>
        Send CV
      </Button> */}
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
