import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRecipe, getDiets } from "../../redux/actions"
import style from "./Create.module.css"

function controlForm (input){
    const reg = new RegExp('^[0-9]+$');
    let errors = {}
    if(!input.title) errors.title= 'please put the title of the recipe'
    if(!input.summary) errors.summary= 'please put the summary of the recipe'
    if(input.healthScore<0 || input.healthScore>100 || !reg.test(input.healthScore)) errors.healthScore='put a healthScore between 0-100'
    return errors
}

export default function Form(){

    const dispatch = useDispatch()
    let diets = useSelector((state=>state.diets))
    const [errors,setErrors]=useState({})      
    const [form,setForm] = useState({
        title:"",
        summary:"",
        healthScore:"",
        analyzedInstructions:[],
        diets:[]
    })
    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])

    const changeHandler= (e)=>{
        setForm({
            ...form,
    [e.target.name] : e.target.value
})
        setErrors(controlForm({
            ...form,
            [e.target.name] : e.target.value   
        }))                             
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
            analyzedInstructions:[],
            diets:[]
        })
        console.log(form);
    }


    
    return(
    <div >
        <h1 className={style.form_title}>Create your own recipe</h1>
        <form  className={style.form_style} onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input className={style.form_input} type="text" value={form.title} onChange={changeHandler} name="title"></input>
                { errors.title && (
                        <p>{errors.title}</p>
                ) }
            </div>
            <div>
                <label>Summary</label>
                <input className={style.form_input} type="text" value={form.summary} onChange={changeHandler}name="summary"></input>
                { errors.summary && (
                        <p>{errors.summary}</p>
                ) }
            </div>
            <div>
                <label>HealthScore</label>
                <input className={style.form_input} type="text" value={form.healthScore} onChange={changeHandler} name="healthScore"></input>
                { errors.healthScore && (
                        <p>{errors.healthScore}</p>
                ) }
            </div>
            <div>
                <label>Instructions</label>
                <input className={style.form_input} type="text" value={form.analyzedInstructions} onChange={changeHandler} name="analyzedInstructions"></input>
                
            </div>
           <select className={style.form_input} onChange={dietHandler}>
                {
                    diets.map(e=>{
                        return(
                            <option value={e}>{e}</option>
                        )
                    })
                }
           </select>
            <div>
            {

                errors.hasOwnProperty('title') || errors.hasOwnProperty('summary')|| errors.hasOwnProperty('score')?  
                <p > please complete all the inputs to create your recipe</p> :
                 <button className={style.form_btn} type='submit' > Create Recipe</button>  
            
            }
               </div>
               </form>

    </div>
    )
    }
