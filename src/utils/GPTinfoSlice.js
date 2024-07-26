import { createSlice } from "@reduxjs/toolkit";

const GPTinfoSlice = createSlice({
    name: "GPTInfo",

    initialState:{
        currentGPT: false,
        moviesGPT: null,
        moviesInfoGPT: null

    },

    reducers :{
        toggleGPT : (state, action)=>{
            state.currentGPT = !state.currentGPT
        },
        addMoviesGPT : (state, action)=>{
            const {moviesGPT, moviesInfoGPT} = action.payload
            state.moviesGPT = moviesGPT
            state.moviesInfoGPT = moviesInfoGPT
        }
    }
})


export const {toggleGPT, addMoviesGPT} = GPTinfoSlice.actions
export default GPTinfoSlice.reducer;