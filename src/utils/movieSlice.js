import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
         addPopulerMovies: (state, action)=>{
            state.populerMovies = action.payload;
        },
         addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies: (state, action)=>{
            state.trendingMovies = action.payload;
        },
        addTrailer:(state, action) => {
           state.nowPlayingTrailer = action.payload
        }
    }

})

export const {addNowPlayingMovies, addTrailer, addPopulerMovies, addTopRatedMovies, addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer