import UserCard from './Card';
import Data from './Data';
import FriendList from './FriendList';

import user from '../user';
import data from '../data';
import friends from '../friends';

export default function App() {
  return (
    <div>
      <UserCard
        username={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Data title="Data Title" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
