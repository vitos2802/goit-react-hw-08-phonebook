import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const getCurrentUser = () => {
  return axios.get('/users/current').then(response => response.data);
};

const signupUser = user => {
  return axios.post('/users/signup', user).then(response => response.data);
};

const loginUser = user => {
  return axios.post('/users/login', user).then(response => response.data);
};

const logoutUser = user => {
  return axios.post('/users/logout', user).then(response => response.data);
};

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = (name, number) => {
  return axios.post('/contacts', name, number).then(response => response.data);
};

const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

const phonebookApi = {
  fetchContacts,
  addContact,
  deleteContact,
  getCurrentUser,
  signupUser,
  loginUser,
  logoutUser,
};

export default phonebookApi;
