import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: 'info',

    initialState: null,

    reducers:{
        addData: (state, action)=>{
            return action.payload
        },

        removeData: (state,action)=>{
            return null
        }
    }
})

export const {addData, removeData} = infoSlice.actions
export default infoSlice.reducer