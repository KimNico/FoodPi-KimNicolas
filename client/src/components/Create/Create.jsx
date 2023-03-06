import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRecipe, getDiets } from "../../redux/actions"


export default function Form(){
    const dispatch = useDispatch()
    let diets = useSelector((state=>state.diets))
    const [form,setForm] = useState({
        title:"",
        summary:"",
        healthScore:"",
        instructions:"",
        diets:[]
    })
    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    const changeHandler = (e)=>{
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
    }

    const dietHandler =(e)=>{
        setForm({
            ...form,
            diets:[...form.diets, e.target.value]
        })
    }
    
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(createRecipe(form))
        setForm({
            title:"",
            summary:"",
            healthScore:"",
            instructions:"",
            diets:[]
        })
    }

    
    return(
    <div>
        <h1>Create your own recipe</h1>
        <form  onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={form.title} onChange={changeHandler} name="title"></input>
            </div>
            <div>
                <label>Summary</label>
                <input type="text" value={form.summary} onChange={changeHandler}name="summary"></input>
            </div>
            <div>
                <label>HealthScore</label>
                <input type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"></input>
            </div>
            <div>
                <label>Instructions</label>
                <input type="text" value={form.instructions} onChange={changeHandler} name="instructions"></input>
            </div>
           <select onChange={dietHandler}>
                {
                    diets.map(e=>{
                        return(
                            <option value={e}>{e}</option>
                        )
                    })
                }
           </select>
            <div>
                <button type="submit" onSubmit={submitHandler}>Add</button>
            </div>
        </form>
        {
            form.diets.map(e=>{
                return(
                    <div>
                        <h5>{e}</h5>
                    </div>
                )
            })
        }
    </div>
    )
    }
