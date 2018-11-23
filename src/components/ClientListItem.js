import React from 'react';
import { connect } from 'react-redux';
import { removeClient } from '../actions/clients';
import { Link } from 'react-router-dom';

const ClientListItem = ({ firstName, lastName, id, dispatch }) => {
  // console.log(props);
  return (
    <div className="clientListItem">
      <Link to={`/edit/${id}`} className="clientListItem__name">
        <p>
          {firstName} {lastName}
        </p>
      </Link>

      <a
        className="clientListItem__button clientListItem__button--one"
        onClick={() => {
          dispatch(removeClient(id));
        }}
      >
        Remove
      </a>
      <Link
        to={`/edit/${id}`}
        className="clientListItem__button clientListItem__button--two"
      >
        Edit
      </Link>
    </div>
  );
};

export default connect()(ClientListItem);
