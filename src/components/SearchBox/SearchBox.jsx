import { useId } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter  } from "../../redux/filtersSlice"

const SearchBox = () => {

  const filter = useSelector(state=> state.filters.name)
  const dispatch = useDispatch()

  const searchId = useId()

  const handleChange = (e) => {
    
    dispatch(changeFilter(e.target.value))
  }

  return (
    <>
       <label htmlFor={searchId}>Find contacts by name</label> 
        
      <input  type="search" value={filter} name="" id={searchId} onChange={handleChange} />
    </>
  )
}

export default SearchBox
