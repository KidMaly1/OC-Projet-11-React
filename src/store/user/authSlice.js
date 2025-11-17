import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    success: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action pour définir les identifiants
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
        // Validation
            if (typeof token !== 'string' || token.trim() === '') {
                console.error('Invalid token');
                return;
            }

            state.user = user || null;
            state.token = token;
            state.success = false;

        },
        // Logout
        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.success = false;
        }
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;