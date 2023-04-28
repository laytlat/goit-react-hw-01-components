import PropTypes, { func } from 'prop-types';
import {
  ListOfFriendItem,
  IsOnlineStatus,
  UserAvatar,
  Username,
} from './FriendListItem.styled';

export function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <ListOfFriendItem key={id}>
      <IsOnlineStatus isOnline={isOnline}></IsOnlineStatus>
      <UserAvatar src={avatar} alt="User avatar" width="48" />
      <Username>{name}</Username>
    </ListOfFriendItem>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
