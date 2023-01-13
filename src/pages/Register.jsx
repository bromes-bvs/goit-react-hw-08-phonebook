import StyledContactForm from 'components/ContactForm/ContactForm.styled';
import Wrapper from 'components/Wrapper/Wrapper.styled';
import { useDispatch } from 'react-redux';
import { registerOperation } from 'redux/auth/authOperations';

export default function Register() {
  const dispatch = useDispatch();

  const handelSubmit = e => {
    e.preventDefault();
    const userName = e.target.elements.name.value;
    const userEmail = e.target.elements.email.value;
    const userPassword = e.target.elements.password.value;

    const newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    // console.log(newUser);
    dispatch(registerOperation(newUser));
    e.target.reset();
  };
  return (
    <Wrapper>
      <StyledContactForm onSubmit={handelSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            title="Email may contain only letters, apostrophe, dash and spaces. For example email@email.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern="(?=.*[a-zA-Z0-9_]).{7,26}"
            title="Password must be digits and can contain spaces, dashes, parentheses and can start with Сapital letter"
            required
          />
        </label>
        <button type="submit">Register</button>
      </StyledContactForm>
    </Wrapper>
  );
}
