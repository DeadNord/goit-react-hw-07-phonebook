import s from './Contacts.module.css';
import Contact from './Contact';

import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../../redux/contacts/contacts-actions';
import { getContacts } from '../../../redux/contacts/contacts-selectors';

export default function Contacts() {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.contactsList}>
          {contacts.map(item => (
            <Contact
              key={item.id}
              name={item.data.name}
              number={item.data.number}
              id={item.id}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </>
  );
}
