import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <li className={css.friendListItem} key={item.id}>
          <span
            className={clsx(item.isOnline ? css.online : css.offline)}
          ></span>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  frends: PropTypes.array,
};
