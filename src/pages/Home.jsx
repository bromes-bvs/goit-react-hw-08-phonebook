import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filterSlice';
import {
  deleteOperation,
  fetchOperation,
  postOperation,
} from 'redux/contacts/operations/contactsOperations';
import { useEffect } from 'react';
import Wrapper from 'components/Wrapper/Wrapper.styled';
import {
  MainHeading,
  SecondaryHeading,
} from 'components/Heading/Heading.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import StartMessage from 'components/StartMessage/StartMessage';
// import { Route, Routes } from 'react-router-dom';

export function Home() {
  const contacts = useSelector(state => state.contacts.items);
  const token = useSelector(state => state.users.token);
  const filter = useSelector(state => state.filter.filter);
  const isLogin = useSelector(state => state.users.isLoggedIn);

  // console.log(isLogin);
  // console.log(useSelector(state => state));
  // console.log(contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(fetchOperation());
  }, [dispatch, token]);

  const handelSubmit = e => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    const findeName = contacts.some(contact =>
      contact.name.toLowerCase().includes(newName.toLowerCase())
    );
    const findeNumber = contacts.some(contact =>
      contact.number.trim().includes(newNumber.trim())
    );

    const newContact = {
      name: newName,
      number: newNumber,
    };
    if (!findeName && !findeNumber) {
      dispatch(postOperation(newContact));
      e.target.reset();
    } else {
      alert(`${newName} is already in contacts`);
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    dispatch(updateFilter(value));
  };

  const daleteContact = (contactId, event) => {
    event.target.disabled = 'true';

    dispatch(deleteOperation(contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Wrapper>
      {isLogin ? (
        <>
          <MainHeading>Phonebook</MainHeading>
          <ContactForm onSubmiting={handelSubmit} />
          <SecondaryHeading>Contacts</SecondaryHeading>
          <Filter value={filter} onChange={handleChange} />
          {visibleContacts.length !== 0 && (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={daleteContact}
            />
          )}
        </>
      ) : (
        <StartMessage />
      )}
    </Wrapper>
  );
}
