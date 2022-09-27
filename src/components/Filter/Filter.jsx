import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <label className={s.label}>
        Find the contact
        <input
          type="text"
          onChange={changeFilter}
          name="filter"
          className={s.input}
        />
      </label>
    </>
  );
};
