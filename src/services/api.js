import axios from 'axios';

const BASE_URL = 'https://654510115a0b4b04436d903b.mockapi.io/contacts';

export const getContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
};

export const addContact = async contact => {
  const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};
