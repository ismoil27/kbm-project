import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function ContactTitle({ heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="black" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="black">
        {children}
      </Typography>
    </div>
  );
}

ContactTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ContactTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default ContactTitle;
