import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",

    initialState: {
        langPresent: "en"
    },

    reducers :{
        selectLang: (state, action)=>{
            state.langPresent = action.payload
        }
    }
})

export const {selectLang} = configSlice.actions
export default configSlice.reducer