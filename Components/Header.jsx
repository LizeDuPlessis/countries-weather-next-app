import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return <header>{title}</header>;
}

Header.defaultProps = {
  title: "Weather in Countries",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
