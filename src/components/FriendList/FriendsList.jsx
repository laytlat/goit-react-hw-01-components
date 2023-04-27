import PropTypes from 'prop-types';

import {
  ListOfFriend,
  ListOfFriendItem,
  IsOnlineStatus,
  UserAvatar,
  Username,
} from './FriendsList.styled';

export function FriendsList({ friends }) {
  return (
    <ListOfFriend>
      {friends.map(friend => {
        return (
          <ListOfFriendItem key={friend.id}>
            <IsOnlineStatus isOnline={friend.isOnline}></IsOnlineStatus>
            <UserAvatar src={friend.avatar} alt="User avatar" width="48" />
            <Username>{friend.name}</Username>
          </ListOfFriendItem>
        );
      })}
    </ListOfFriend>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
