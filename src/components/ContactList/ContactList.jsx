import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactsArr, onDelete }) => {
  return (
    <div className={s.box}>
      {contactsArr.map((contactArr) => (
        <Contact
          key={contactArr.id}
          id={contactArr.id}
          name={contactArr.name}
          number={contactArr.number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ContactList