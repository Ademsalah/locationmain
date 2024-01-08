import axios from 'axios'


 export const fetchCategorie=async()=>{
    const {data} = await axios.get(`http://localhost:4000/categorie/allgat`);
    return data 
}

export const postCategorie = async(values)=>{
    const addingCategorie = await axios.post(`http://localhost:4000/categorie/addgategorie`,{...values})

}

export   const deletCategorie=async(id)=>{
    
    const deletCategorie = await axios.delete(`http://localhost:4000/categorie/remove/${id}`)

}

export const updateCategorie = async(id,value)=>{
    const updatedCategorie = await axios.put(`http://localhost:4000/produit/update/:idcate/${id}`,value)
    
}

