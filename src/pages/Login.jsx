import StyledContactForm from 'components/ContactForm/ContactForm.styled';
import Wrapper from 'components/Wrapper/Wrapper.styled';
import { useDispatch } from 'react-redux';
import { loginOperation } from 'redux/auth/authOperations';

export default function Login() {
  const dispatch = useDispatch();

  const handelSubmit = e => {
    e.preventDefault();
    const enterEmail = e.target.elements.email.value;
    const enterPassword = e.target.elements.password.value;

    const loginUser = {
      email: enterEmail,
      password: enterPassword,
    };

    dispatch(loginOperation(loginUser));

    e.target.reset();
  };

  return (
    <Wrapper>
      <StyledContactForm onSubmit={handelSubmit}>
        <label>
          Email
          <input type="email" name="email" title="Enter your email" required />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern="(?=.*[a-zA-Z0-9_]).{7,26}"
            title="Enter your password"
            required
          />
        </label>
        <button type="submit">Login</button>
      </StyledContactForm>
    </Wrapper>
  );
}
