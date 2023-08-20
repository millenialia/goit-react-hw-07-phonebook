import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

import css from "./Contact.module.css";

export const Contact = ({contact}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.contactId));

  return (
      <div>
            <p>{contact.contactName}: {contact.contactNumber}</p>
        <button type="button" onClick={handleDelete} id={contact.contactId} className={css.delete}>Delete</button>
      </div>
  )

}
