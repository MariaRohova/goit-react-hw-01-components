import React from "react";
import PropTypes from 'prop-types';
import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
      <li className={css.item} key={id}>
        <span className={`${css.status} ${isOnline ? css.isActive : ''}`}>
          {' '}
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendListItem;