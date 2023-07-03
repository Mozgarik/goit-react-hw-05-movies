import { useEffect, useState } from "react"
import { fetchMovieByName } from "service/Api"
import { Link } from "react-router-dom"
import style from "./style.module.css"

export function SearchMovies(props) {
    const [movies, setMovies] = useState()
    

    useEffect(() => {
       if (props.query) {
      fetchMovieByName(props.query).then(r => {
        setMovies(r.results)
        })        
      } 
    }, [props.query])



    if (movies) {
        return (
          <ul className={style.popularList}>
            {
                 movies.map(movie => {return (
                <Link className={style.popularLink} to={`/movies/${movie.id}`} key={movie.id}><li className={style.popularItem}>{movie.title}</li></Link>)})  
            }
        </ul>
        ) 
       }    
}