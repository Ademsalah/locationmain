import {configureStore } from '@reduxjs/toolkit'
import authSlice  from './authSlice'
import StadiumsSlice from './StadiumsSlice'
import categorieSlice from './categorieSlice'
import productSlice from './productSlice'
export default configureStore({
    reducer:{
        auth : authSlice,
        Stadiums:StadiumsSlice,
        categorie:categorieSlice,
        product:productSlice
    }
}) 