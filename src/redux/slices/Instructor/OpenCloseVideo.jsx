    import { createSlice } from "@reduxjs/toolkit";

    const openCloseVideoSlice = createSlice({
        name: "openClose",
        initialState: { modalName: null },
        reducers: {
            openModal: (state, action) => {
                state.modalName = action.payload;
            },
            closeModal: (state) => {
                state.modalName = null;
            },
        },
    });

    export const { openModal, closeModal } = openCloseVideoSlice.actions;

    export default openCloseVideoSlice.reducer;
