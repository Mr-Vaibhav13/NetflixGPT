import { createSlice } from "@reduxjs/toolkit";

const inMoviesSlice = createSlice({
    name: "inMovies",

    initialState:{
        indiaMovies: [],
        canadaMovies: [],
        usMovies: [],
        brazilMovies: [],
        germanMovies: [],
        saMovies: [],
        ukMovies: [],
        batMovies: [],
    },

    reducers:{
        addMovie: (state,action)=>{
             state.indiaMovies = action.payload
        },
        addMovieCanada: (state,action)=>{
            state.canadaMovies = action.payload
        },
        addMovieUS: (state,action)=>{
            state.usMovies = action.payload
        },
        addMovieBrazil: (state,action)=>{
            state.brazilMovies = action.payload
        },
        addMovieGerman: (state,action)=>{
            state.germanMovies = action.payload
        },
        addMovieSA: (state,action)=>{
            state.saMovies = action.payload
        },
        addMovieUK: (state,action)=>{
            state.ukMovies = action.payload
        },
        addMovieBat: (state,action)=>{
            state.batMovies = action.payload
        }
        
    }

})


export const {addMovie, addMovieCanada, addMovieUS, addMovieBrazil, 
    addMovieGerman, addMovieSA, addMovieUK, addMovieBat} = inMoviesSlice.actions;
export default inMoviesSlice.reducer;