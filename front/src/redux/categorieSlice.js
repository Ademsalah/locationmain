import {createSlice} from "@reduxjs/toolkit"

const categorieSlice = createSlice({
    name:"categorie",
    initialState:[
        { name : "Redux categorie 1",
   
},  { name : "Redux categorie 2",
   
}],
reducers:{
    setCategorie:(state,action)=>{
        return action.payload
    }
}
})

export const {setCategorie} = categorieSlice.actions 
export default categorieSlice.reducer