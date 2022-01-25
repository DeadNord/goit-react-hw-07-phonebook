import { nanoid } from 'nanoid';

import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => ({
  payload: {
    id: nanoid(),
    data,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/filter');

export default { addContact, deleteContact, changeFilter };
