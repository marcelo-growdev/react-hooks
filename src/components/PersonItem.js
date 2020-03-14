import React from 'react';
import PropTypes from 'prop-types';

function PersonItem({ person, onDelete }) {
  return (
    <li key={person}>
      <span>{person}</span>
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

PersonItem.defaultProps = {
  person: 'No person found.',
};

PersonItem.propTypes = {
  person: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default PersonItem;
