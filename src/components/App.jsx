import { memo } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

import { useEffect } from 'react';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux/es/exports';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operationsContacts';
import { filterContact } from 'redux/filter/sliceFilter';
import { getFilter, visibleContacts } from '../redux/selectors';

function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(visibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = (name, phone) => {
    const payload = { name, phone };
    const action = addContact(payload);
    dispatch(action);
  };

  const onDeleteContact = payload => {
    dispatch(deleteContact(payload));
  };

  const onChangeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Wrapp>
      <Title>phonebook:</Title>
      <Form onSubmit={onAddContact} contacts={contacts} />
      <Title>contacts:</Title>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
    </Wrapp>
  );
}

const Wrapp = styled.div`
  width: 600px;
  margin: 50px 50px;
  padding: 15px;
  border: 1px solid black;
`;

const Title = styled.h3``;

export default memo(App);
