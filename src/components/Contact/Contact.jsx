import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({contact}) => {
  
    const dispatch = useDispatch()

  return (
    <>
          <li>
              <p>{contact.name}</p>
              <button onClick={()=> dispatch(deleteContact(contact.id))}>Delete</button>
          </li>
          
    </>
  );
};

export default Contact;
