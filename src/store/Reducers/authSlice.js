import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({ // Slice pour gérer l'état de la connexion
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => { // Reducer pour se connecter
      state.user = action.payload.user; // Données
      state.token = action.payload.token;
    },
    logOut: (state) => { // Reducer pour se déconnecter
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;