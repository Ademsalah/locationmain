import {createSlice} from "@reduxjs/toolkit"

const StadiumsSlice = createSlice({
    name:"Stadiums",
    initialState:[
        { name : "Redux",
    postUrl: "https://www.fcbarcelona.com/photo-resources/2021/08/09/c4f2dddd-2152-4b8b-acf8-826b4377e29d/Camp-Nou-4.jpg?width=1200&height=750",
    price:"20 lwehedcampNouRedux",
    rating : "5campNouRedux"
},{ name : "Redux",
postUrl: "https://www.fcbarcelona.com/photo-resources/2021/08/09/c4f2dddd-2152-4b8b-acf8-826b4377e29d/Camp-Nou-4.jpg?width=1200&height=750",
price:"20 lwehedcampNouRedux",
rating : "5campNouRedux"
}],
reducers:{
    setStadium:(state,action)=>{
        return action.payload
    }
}
})

export const {setStadium} = StadiumsSlice.actions 
export default StadiumsSlice.reducer