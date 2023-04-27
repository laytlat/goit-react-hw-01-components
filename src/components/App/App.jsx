import user from 'Data/user.json';
import data from 'Data/data.json';
import friends from 'Data/friends.json';
import transactions from 'Data/transactions.json';
import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendsList } from '../FriendList/FriendsList';
import { TransactionHistory } from '../Transactions/TransactionHistory';
export const App = () => {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <FriendsList friends={friends}></FriendsList>
      </Container>
      <Container>
        <TransactionHistory items={transactions}></TransactionHistory>
      </Container>
    </>
  );
};
