import { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getRecipes, getRecipesName } from "../../redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import { orderByName } from "../../redux/actions";
import { orderByPuntuation } from "../../redux/actions";
import style from "./Home.module.css"
import { filterRecipesByTypeDiet } from "../../redux/actions";


export default function Home(){
    const dispatch = useDispatch()
    const recipes = useSelector((state)=>state.recipes)
    const [sort,setSort] = useState('')
    const [ filter, setFilter]= useState('')
    const [search, setSearch] = useState('')
    const [currentPage,setCurrentPage] =useState(1)
    const [recipesPerPage,setrecipesPerPage]=useState(9)
    const indexLastRecipe = currentPage * recipesPerPage
    const indexFirstRecipe = indexLastRecipe - recipesPerPage      
    const currentRecipes = recipes.slice(indexFirstRecipe,indexLastRecipe)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getRecipes())
    },[dispatch])

    const handleFilterTypeDiet = (e)=> {
        dispatch(filterRecipesByTypeDiet(e.target.value))
    }

    const sortHanlde =(e)=>{
        e.preventDefault(e)
        dispatch(orderByPuntuation(e.target.value))
        setSort(e.target.value)

    }
    const filterHandle = (e)=>{
        e.preventDefault(e)
        dispatch(orderByName(e.target.value))
        setFilter(e.target.value)

    }

    const searchHandle = (e)=>{
        setSearch(e.target.value)
        
    }
    const submitHandle =(e)=>{
        e.preventDefault(e)
        dispatch(getRecipesName(search))
        setSearch('')
    }
  

    return(
        <div>
            <div>
              
                <div>
                    <select onChange={handleFilterTypeDiet} >
                    <option value="All">All recipes</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian </option>
                    <option value="lacto-vegetarian">Lacto-Vegetarian </option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                </select>
                </div>
                
                <div>
                <form onSubmit={submitHandle}> {/* este es para hacer enter y que funcione */}
                    <input type='text' placeholder='search...' value={search} onChange={searchHandle} ></input>
                    <button  type='submit'>search</button>
                </form>
                </div>
          
                <div>
                <select onChange={filterHandle}>
                    <option value="asc">Ascendent(A-Z)</option>
                    <option value="des">Descendent(Z-A)</option>
                </select>
                </div>
                <div>
                    <select  onChange={sortHanlde}>
                    <option value="mayormenor">Mayor a Menor</option>
                    <option value="menormayor">Menor a Mayor</option>
                    </select>
                </div>

            </div>
            <div className={style.container}>
                {

                        currentRecipes.map(recipe=>{
                            return  <Card 
                            key={recipe.id}
                            title={recipe.title}
                            score={recipe.score}
                            diets={recipe.diets}
                            img={recipe.img}
                            id={recipe.id}
                            />
                        })
                }
            </div>
            <div > 
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {recipes.length}
            paginado= {paginado}
            />
            </div>     

           
        </div>
    )
}