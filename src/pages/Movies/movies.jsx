import { SearchMovies } from "components/Search/searchMovies"
import { useEffect, useState } from "react"
import { fetchMovieByName } from "service/Api"
import style from './style.module.css'


export function Movies() {
    const [query, setQuery] = useState()
    


  return (
        <div>
            <div>
               <form className={style.searchForm} onSubmit={(e) => {
                    e.preventDefault()
                    setQuery(e.currentTarget.movie.value)
                    e.currentTarget.movie.value = ""
                }}>  
            
                <input className={style.formInput} name="movie" type="input" placeholder="Поиск фильмов" />
                <button className={style.formButton} type="submit" >Поиск</button>
            </form>
            <SearchMovies query={query} /> 
            </div>
        </div>  
    
            )
}