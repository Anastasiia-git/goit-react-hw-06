import "./App.css";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const contactsArr = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

const [contacts, setContacts] = useState(() => {
  const savedContacts = localStorage.getItem("saved-contscts")
   if (savedContacts) {
     return JSON.parse(savedContacts);
   } 
     return contactsArr;
})

useEffect(() => {
  localStorage.setItem("saved-contscts", JSON.stringify(contacts));
}, [contacts]);

const [savedContactsGiven, setsavedContactsGiven] = useState(() => { const savedContactsGiven = localStorage.getItem("saved-contacts-given");
  return savedContactsGiven === "true";
});

useEffect(() => {
  localStorage.setItem("saved-contacts-given", savedContactsGiven);
}, [savedContactsGiven]);

const [filter, setFilter] = useState("");

const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

const addContact = (newContact) => { setContacts((prevContacts) => [...prevContacts, newContact]);
 };

const deleteContact = (contactId) => { setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId));
};

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList onDelete={deleteContact} contactsArr={filteredContacts} />
    </div>
  );
};

export default App;
