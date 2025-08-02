import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        viewGptSearch : false
    },
    reducers :{
        setGptSearchView:(state) => {
            state.viewGptSearch = !state.viewGptSearch;
        }
    }
})


export const {setGptSearchView} = gptSlice.actions;

export default  gptSlice.reducer;