import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	message: '',
};

const notifySlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		setNotify(_state, action) {
			return {
				message: action.payload.message,
			};
		},
		clearNotify() {
			return initialState;
		}
	},
});

export const { setNotify, clearNotify } = notifySlice.actions;

export default notifySlice.reducer;
