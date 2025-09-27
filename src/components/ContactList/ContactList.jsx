import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

const ContactList = () => {
  let contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector(state => state.filters.name)

  if (filter !== "") {
    contacts = contacts.filter(contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
  }
  
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  )
}

export default ContactList
