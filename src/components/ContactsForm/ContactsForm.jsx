import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsSlice"
import { nanoid } from "@reduxjs/toolkit"

const ContactsForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const email = e.target.elements.email.value

    dispatch(addContact({
      id: nanoid(),
      name,
      email
    }))

    e.target.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email"></label>
        <input type="email" id="email" name="email" />

        <button type="submit">Gönder</button>
      </form> 
    </>
  )
}

export default ContactsForm
