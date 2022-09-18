import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63270e11ba4a9c47532fd5cd.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};
