import { configureStore } from '@reduxjs/toolkit';
import infoReducer from "./infoSlice"
import inMoviesReducer from './inMoviesSlice';
import GPTinfoReducer from './GPTinfoSlice';
import configReducer from './configSlice';

const store = configureStore({
    reducer: {
        info: infoReducer,
        inMovies: inMoviesReducer,
        GPTinfo: GPTinfoReducer,
        config: configReducer        
    }
})

export default store;

