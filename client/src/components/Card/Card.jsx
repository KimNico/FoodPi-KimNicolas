import { Link } from "react-router-dom"

import style from "./Card.module.css"

export default function Card(props){

    return(
        <div className={style.card_style}>
            <div key={props.id} className={style.row} >
                <Link to={`recipes/${props.id}`} ><h1 className={style.card_title} > {props.title}</h1></Link>
                <img src={props.img} alt="" className={style.card_img}/>
                <h1 className={style.card_score}> {props.score}</h1>
                <h1 className={style.card_type}> {props.diets.map(e=>e+' / ')}</h1>
            </div>
        </div>
    )
}