import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div>
      <span>Hi, {name} </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
