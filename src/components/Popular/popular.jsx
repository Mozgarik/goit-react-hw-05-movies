import { useEffect, useState } from "react"
import { fetchTrendMovies } from "service/Api"
import { Link, Routes } from "react-router-dom"
import style from './style.module.css'



export function PopularList(){ 
    const [films, setFilms] = useState()

useEffect(() => {
    fetchTrendMovies().then(r => setFilms(r))
}, [])



if (films) {
    return ( 
        <ul className={style.popularList}>
            {
                 films.map(film => {return (
                <Link className={style.popularLink} to={`/movies/${film.id}`} key={film.id}><li className={style.popularItem}>{film.title}</li></Link>)})  
            }
        </ul>
          
    )    
}

}