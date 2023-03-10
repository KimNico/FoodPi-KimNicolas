
import React from "react";
import style from './Paginado.module.css'

export default function Paginado ({recipesPerPage ,  allRecipes , paginado}) {
const pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++){
   pageNumbers.push(i+1)
}
return (
          
    <nav className={style.paginacion}  >
        <ul>
            {
                pageNumbers && pageNumbers.map(n => (
                    <li key={n}  >
                    <a  onClick= {() => paginado(n)} >{n}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
            
)
}