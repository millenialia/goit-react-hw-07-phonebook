import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/selectors";
import { setFilter } from 'redux/filterSlice';
import css from "./Filter.module.css";



export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleChange = (e) => {
    const filterName = e.currentTarget.value
    dispatch(setFilter(filterName));
  }
    return (
        <label htmlFor="filter" className= {css.filter}>
          Find contacts by name
        <input
          type="text"
          name="filter"

          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter.value}
        />
      </label>
  )
}
