import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friendsList">
      {friends.map(item => (
        <li className="friendsListCard" key={item.id}>
          <span
            className={item.isOnline ? 'status online' : 'status offline'}
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
