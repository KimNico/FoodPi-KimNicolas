import { Link } from "react-router-dom"
import style  from './Landing.module.css'
import image from './images.jpeg'


export default function Landing(){

    return(
        <div className={style.welcome}>
            <h1  className={style.title}>Welcome to Healthy Food!</h1>
            <img src={image} alt=""></img>
           <div>
           <Link  to='/home' className={style.start}>Start</Link>
           </div>

        </div>
    )
}