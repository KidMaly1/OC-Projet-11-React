import { loginUser, fetchUserProfile } from './userApi';
import { setCredentials } from '../authSlice';

export const loginAndFetchProfile = ({ email, password }) => async (dispatch) => {
  const loginResult = await loginUser({ email, password });

  if (loginResult.success) {
    const token = loginResult.data.token;
    const profileResult = await fetchUserProfile(token);

    if (profileResult.success) {
      dispatch(setCredentials({
        token,
        user: profileResult.data,
      }));
    } else {
      console.error('Erreur chargement profil :', profileResult.error);
    }
  } else {
    console.error('Erreur connexion :', loginResult.error);
  }
};