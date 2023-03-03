import React from "react";
import PropTypes from "prop-types";

function Company({ data }) {
  const { name, city, since } = data;
  return (
    <div>
      <p>Nama: {name}</p>
      <p>Kota: {city}</p>
      <p>Sejak: {since}</p>
    </div>
  );
}

Company.propTypes = {
  data: PropTypes.object
};

export default Company;