import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getRecipesDetail } from "../../redux/actions"
import style from './Detail.module.css'


export default function Detail(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const detailstate = useSelector((state)=> state.recipesDetail)

    useEffect(()=>{
        dispatch(getRecipesDetail(id))
        console.log(detailstate);
    },[dispatch])
    return(
        <div>
        {
            id.length > 6?
            <div>
            {
                     <div className={style.container}>
                     <div className={style.card_style}>
                             <h1> {detailstate.title} </h1>
                             <img src={detailstate.img ? detailstate.img : 'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'} alt=""></img>
                             <h3 className={style.type} dangerouslySetInnerHTML={{ __html: detailstate.diets }}></h3>
                             <h5>healthScore:{detailstate.score}</h5>
                         </div>
                         <div className={style.card_summary}>
                                 <h5>summary: </h5><h5 dangerouslySetInnerHTML={{ __html: detailstate.summary }}></h5>
                                 <h5>steps: </h5><h5 dangerouslySetInnerHTML={{ __html: detailstate.analyzedInstructions }}></h5>
                             </div>
                 </div>
            }
            </div>
            :
            <div>
                {
            detailstate.length > 0  ?
            <div className={style.container}>
                <div className={style.card_style}>
                        <h1> {detailstate[0].title} </h1>
                        <img src={detailstate[0].img ? detailstate[0].img : 'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'} alt=""></img>
                        <h3 className={style.type} dangerouslySetInnerHTML={{ __html: detailstate[0].diets.map(t => t) }}></h3>
                        <h5>healthScore:{detailstate[0].score}</h5>
                    </div>
                    <div className={style.card_summary}>
                            <h5>summary: </h5><h5 dangerouslySetInnerHTML={{ __html: detailstate[0].summary }}></h5>
                            <h5>steps: </h5><h5 dangerouslySetInnerHTML={{ __html: detailstate[0].analyzedInstructions.map(e => e.steps.map(f => f.step + "<br/>")) }}></h5>
                        </div>
            </div>
            :
            <div className={style.loader}>
                 <div className={style.circle}></div>
                 <div className={style.circle}></div>
                 <div className={style.circle}></div>
                 <div className={style.circle}></div>
            </div>
            
        }
        </div>
        }
        </div>
    )
}