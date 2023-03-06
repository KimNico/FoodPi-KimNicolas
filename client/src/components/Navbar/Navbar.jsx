import { Link } from "react-router-dom"
import style from "./Navbar.module.css"

export default function Navbar(){   

    return(
        <div className={style.navbar}>
            <Link to="/home">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/about">About</Link>
        </div>
    )
} 
