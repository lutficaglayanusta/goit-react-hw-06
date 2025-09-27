import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsSlice"
import { nanoid } from "@reduxjs/toolkit"
import { useId } from "react"
import css from "./ContactsForm.module.css"

const ContactsForm = () => {

  const dispatch = useDispatch()
   const nameFieldId = useId();
  const numberFieldId = useId();


  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.elements.name.value
    const number = e.target.elements.number.value

    dispatch(addContact({
      id: nanoid(),
      name,
      number
    }))

    e.target.reset()
  }

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={nameFieldId}></label>
        <input type="text" id={nameFieldId} name="name" />

        <label htmlFor={numberFieldId}></label>
        <input type="tel" id={numberFieldId} name="number" />

        <button type="submit">Gönder</button>
      </form> 
    </>
  )
}

export default ContactsForm
