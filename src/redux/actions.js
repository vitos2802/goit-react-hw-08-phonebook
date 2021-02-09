import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// const addContact = createAction('contacts/add', (name, phone) => {
//   return {
//     payload: {
//       // id: shortid.generate(),
//       name,
//       phone,
//     },
//   };
// });

// const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

// const exportModule = { changeFilter };

export default changeFilter;
