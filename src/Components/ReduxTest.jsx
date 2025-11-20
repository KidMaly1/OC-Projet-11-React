import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, logOut } from '../store/Reducers/authSlice';

const ReduxTest = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <button
        onClick={() =>
          dispatch(setCredentials({ user: { email: 'test@login.com' }, token: '1234567' }))
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logOut())}>Logout</button>

      <p>Utilisateur : {user?.email || 'Non connecté'}</p>
    </div>
  );
};

export default ReduxTest;