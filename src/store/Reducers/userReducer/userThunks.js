import { updateProfileUserName } from './userApi';
import { setCredentials } from '../authSlice';

export const updateUserName = (token, userName) => async (dispatch) => {
  console.log('🚀 Appel de updateUserName avec :', { token, userName });
    const result = await updateProfileUserName(token, userName);
    console.log('📦 Résultat de l’API :', result);
    

    if (result.success) {
    dispatch(setCredentials({
      token,
      user: result.data, // données mises à jour
    }));
    console.log('✅ Username mis à jour avec succès');
    } else {
    console.error('❌ Erreur mise à jour username :', result.error);
    }
}