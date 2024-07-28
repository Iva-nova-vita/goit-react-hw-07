import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const updateFilter = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };
  return (
    <div className={css.search}>
      <label htmlFor='search'>Find contacts by name</label>
      <input onInput={updateFilter} id='search'></input>
    </div>
  );
}
