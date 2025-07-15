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
        addTrailer:(state, action) => {
           state.nowPlayingTrailer = action.payload
        }
    }

})

export const {addNowPlayingMovies, addTrailer} = movieSlice.actions;
export default movieSlice.reducer