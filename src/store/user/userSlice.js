import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: undefined,
    name: '',
    loading: false,
    user: null,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});


export default userSlice.reducer;