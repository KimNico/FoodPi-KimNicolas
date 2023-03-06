import { useSelector, useDispatch } from "react-redux"
import { getRecipes } from "../../redux/actions"
import Card from "../Card/Card"
import { Link } from "react-router-dom"
import style from "./CardContainer.module.css"


export default function CardContainer(){
    const recipes = useSelector(store=>store.recipes)
    return(
        <div className={style.column}>
           {recipes.map(recipe=>{
            return <Card
                key={recipe.id}
                title={recipe.title}
                score={recipe.score}
                diets={recipe.diets}
                img={recipe.img}
                id={recipe.id}
            />
           })}
        </div>
    )
}