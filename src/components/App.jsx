import UserCard from './1-st task/Card';
import Data from './2-nd task/Data';
import FriendList from './3-d task/FriendList';
import TransactionsTable from './4-th task/TransactionsTable';

import user from '../user';
import data from '../data';
import friends from '../friends';
import transactions from '../transactions';

export default function App() {
  return (
    <div>
      <UserCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Data title="Data Title" stats={data} />
      <FriendList friends={friends} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}
