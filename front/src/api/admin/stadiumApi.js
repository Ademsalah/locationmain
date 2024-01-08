import axios from 'axios'


 export const fetchStadiums=async()=>{
    const {data} = await axios.get(`http://localhost:4000/stadium/jibtstadium`);
    return data 
}

export const postStadiums = async(values)=>{
    const addingStadiums = await axios.post(`http://localhost:4000/stadium/zidstadium`,{...values})

}

export   const deletStadiums=async(id)=>{
    
    const deletStadiums = await axios.delete(`http://localhost:4000/stadium/stadium/${id}`)

}

export const updateStadiums = async(id,value)=>{
    const updatedStadiums = await axios.put(`http://localhost:4000/stadium/updatystadium/${id}`,value)
    
}

export const GetUniqueStadiums = async (id,value)=>{
    const {data} = await axios.get(`http://localhost:4000/stadium/jibw7dastadium/${id}`,value)
    return data
}