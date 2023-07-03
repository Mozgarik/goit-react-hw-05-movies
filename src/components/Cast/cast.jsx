import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieCast } from "service/Api";
import style from './style.module.css'

export function Cast() {
    const [film, setFilm] = useState([])

    const params = useParams()
 
    useEffect(() => {
        fetchMovieCast(params.movieId).then(r => setFilm(r.cast))
    }, [])
    
   function filmPoster(f) {
    return `https://image.tmdb.org/t/p/w200/${f}`
   }


   
        return (
            <div> {film.length > 0 ? <ul className={style.castList}>
                    {
                film.map(f => {return (
                <li className={style.cardList} key={f.id}>
                    <img src={f.profile_path ? filmPoster(f.profile_path) : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} width={200} height={300} alt="" />
                    <h3>{f.name}</h3>
                    <span className={style.character}>{f.character}</span>
                </li>
                     )})}
                </ul> : <h3 className={style.noCast}>No cast</h3>}
                  
            </div>
                
        )
    }
