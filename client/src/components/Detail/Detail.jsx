import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getRecipesDetail } from "../../redux/actions"
import style from './Detail.module.css'


export default function Detail(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const detailstate = useSelector((state)=> state.recipesDetail)

    console.log(detailstate);
    useEffect(()=>{
        dispatch(getRecipesDetail(id))
        console.log(detailstate);
    },[dispatch])

    return(
        <div>
        {
            detailstate.length > 0  ?
            <div >
                <h1 > {detailstate[0].title} </h1>
                <img  src={detailstate[0].img ? detailstate[0].img :'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'} alt=""></img>
                <h3 >Type Diet: </h3><h3 className={style.type} dangerouslySetInnerHTML={{__html: detailstate[0].diets.map(t => t)}}></h3>
                <h5>summary: </h5><h5 dangerouslySetInnerHTML={{ __html: detailstate[0].summary }}></h5>
                <h5>healthScore:{detailstate[0].score}</h5>
                <h5>steps: </h5><h5 dangerouslySetInnerHTML={{__html: detailstate[0].instructions.map(e => e.steps.map(f => f.step+"<br/>"))}}></h5>
            </div>:
            <div>
                <h2>Loading...</h2>
              
            </div>
        }
        </div>
          

    )
} 
// dangerouslySetInnerHTML={{ __html: detail.summary }}

// { Array.isArray(detailstate[0].instructions) ? detailstate[0].instructions.map(e => e.steps.map(f => `${f.step}\n`)) : detailstate[0].instructions }