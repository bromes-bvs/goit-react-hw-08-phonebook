import { useDispatch } from 'react-redux';
import { logoutOperation } from 'redux/auth/authOperations';
import defaultAvatar from './batman.jpg';
import { MenuBox, PhonebookLink } from './UserMenu.styled';

export default function UserMenu({ user }) {
  // const token = useSelector(state => state.users.user.token);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutOperation());
  };

  return (
    <MenuBox>
      <PhonebookLink to="/">Phonebook</PhonebookLink>
      <img src={defaultAvatar} alt="Batman" width="40px"></img>
      <div>
        <p>{user.name ?? 'Batman'}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </MenuBox>
  );
}
