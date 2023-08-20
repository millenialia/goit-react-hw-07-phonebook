import { Contact } from "../Contact/Contact"
import { useSelector } from "react-redux";
import { getFilter, getContacts } from "redux/selectors";
import css  from "./ContactList.module.css";

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.contactName.toLowerCase().includes(filter.value.toLowerCase()))
};

export const ContactList = () => {

  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)
  const visibleContacts = getVisibleContacts(contacts, filter)

  return (
    <ul className= {css.contactNameList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.contactId} className={css.contactName}>
          <Contact
              contact={contact} />
            </li>
        )
      })}
    </ul>
)
}
