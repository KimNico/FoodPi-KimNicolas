// import { useEffect } from "react"
// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getRecipesName } from "../../redux/actions"

// export default function SearchBar(){    
//     const [search,setSearch]= useState('')
//     const dispatch = useDispatch()

//     const changeHandler=(e)=>{
//         setSearch(e.target.value)
//     }

//     const submitHandler=(e)=>{
//         e.preventDefault()
//         if(search){
//             dispatch(getRecipesName())
//             setSearch("")
//         }
//     }

//     return(

//         <div>

//             <input type="text" placeholder="Search..." 
//             value={search} onChange={changeHandler}></input>
//             <button type="submit" onClick={submitHandler}>Search</button>

//         </div>
//     )
// }