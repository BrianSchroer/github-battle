import React from 'react';
import PropTypes from 'prop-types';

function Number({value}){
  return <span>{value.toLocaleString('en')}</span>;
}

Number.propTypes = {
  value: PropTypes.number.isRequired
};

export default Number;