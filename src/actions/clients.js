import database from '../firebase/firebase';
// action generator for adding client
// passed with default value if no value passed for the client
export const addClient = (client) => ({
  type: 'ADD_CLIENT',
  client,
});

export const startAddClient = (clientData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      firstName = '',
      lastName = '',
      gender = '',
      phone = '',
      email = '',
      address = '',
      priority = '',
      field = '',
      note = '',
      lastCommunication = '',
      memberType = '',
      createdAt = 0,
    } = clientData;

    const client = {
      firstName,
      lastName,
      gender,
      phone,
      email,
      address,
      priority,
      field,
      note,
      lastCommunication,
      memberType,
      createdAt,
    };

    return database
      .ref(`users/${uid}/clients`)
      .push(client)
      .then((ref) => {
        dispatch(
          addClient({
            id: ref.key,
            ...client,
          })
        );
      });
  };
};

// action generating for removing client
export const removeClient = ({ id } = {}) => {
  return {
    type: 'REMOVE_CLIENT',
    id,
  };
};

export const startRemoveClient = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/clients/${id}`)
      .remove()
      .then(() => {
        dispatch(removeClient({ id }));
      });
  };
};

// action generating for modifying the client details
export const editClient = (id, updates) => {
  return {
    type: 'EDIT_CLIENT',
    id,
    updates,
  };
};

export const startEditClient = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/clients/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editClient(id, updates));
      });
  };
};

// set clients

export const setClients = (clients) => {
  return {
    type: 'SET_CLIENTS',
    clients,
  };
};

// export const startSetClients

export const startSetClients = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/clients`)

      .once('value')
      .then((snapshot) => {
        const clients = [];
        snapshot.forEach((childSnapshot) => {
          clients.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setClients(clients));
      });
  };
};
