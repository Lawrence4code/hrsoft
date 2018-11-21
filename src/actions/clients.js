import uuid from 'uuid';

export const addClient = ({
  title = '',
  firstName = '',
  lastName = '',
  gender = '',
  phone = '',
  email = '',
  address = '',
  status = '',
  flied = '',
  note = '',
  lastCommuniation = '',
  memberType = '',
  createdAt = 0
} = {}) => ({
  type: 'ADD_CLIENT',
  client: {
    id: uuid(),
    title,
    firstName,
    lastName,
    gender,
    phone,
    email,
    address,
    status,
    flied,
    note,
    lastCommuniation,
    memberType,
    createdAt
  }
});

export const removeClient = id => ({
  type: 'REMOVE_CLIENT',
  id
});

export const editClient = (id, updates) => ({
  type: 'EDIT_CLIENT',
  id,
  updates
});
