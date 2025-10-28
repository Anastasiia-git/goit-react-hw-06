import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.box}>
      {filteredContacts.map((contacts) => (
        <Contact
          key={contacts.id}
          id={contacts.id}
          name={contacts.name}
          number={contacts.number}
          onDelete={() => dispatch(deleteContact(contacts.id))}
        />
      ))}
    </div>
  );
};

export default ContactList