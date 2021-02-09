import { useDispatch, useSelector } from 'react-redux';
import changeFilter from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.filterLabel}>
      <p className={s.filterText}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
