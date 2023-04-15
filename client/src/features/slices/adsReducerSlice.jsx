import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAds : [],
    filteredAds: [],
    configFilter: {
        name: '',
        categoryId: '',
        order: 'AZ',
    },
    AdDetail : {},
    currentPage : 1,
    status : null,
}

export const adSlice = createSlice ({
    name : "ad",
    initialState,
    reducers : {
        changePage : (state, action)=> {
            state.currentPage = action.payload
        },
        clearProductDetail : (state, action)=> {
            state.productDetail = {}
        },
        

    }
})