import PropTypes from 'prop-types';

import { FriendListItem } from '../FriendListItem/FriendListItem';
import { ListOfFriend } from './FriendsList.styled';

export function FriendsList({ friends }) {
  return (
    <ListOfFriend>
      {friends.map(friend => {
        return FriendListItem(friend);
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
