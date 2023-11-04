import { deleteContactsThunk } from 'components/redux/contactsThunk';
import { selectFilteredContacts } from 'components/redux/selectors';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContactList = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {filteredContactList?.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
            <button
              type="button"
              onClick={() => dispatch(deleteContactsThunk(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
