import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { StyledLink, StyledNavigation } from './AppBar.styled';

export default function AppBar() {
  const isLogin = useSelector(state => state.users.isLoggedIn);
  const user = useSelector(state => state.users.user);
  //   console.log(user);

  return (
    <StyledNavigation>
      <nav>
        {isLogin ? (
          <UserMenu user={user} />
        ) : (
          <>
            <StyledLink to="/register">Registration</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
          </>
        )}
      </nav>
    </StyledNavigation>
  );
}
