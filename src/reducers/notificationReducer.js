import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	message: '',
};

const notifySlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {},
});

export const { } = notifySlice.actions;

export default notifySlice.reducer;
