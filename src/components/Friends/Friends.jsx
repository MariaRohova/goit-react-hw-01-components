import css from './Friends.module.css';
import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
        
      })}
    </ul>
  );
}


