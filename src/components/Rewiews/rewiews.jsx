import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "service/Api";
import style from "./style.module.css"

export function Reviews() {
    const [film, setFilm] = useState([])

    const params = useParams().movieId

    useEffect(() => {
        fetchMovieReviews(params).then(f => setFilm(f.results))
    }, [])
    

    return (
     <div> <h2 className={style.title}>Rewiews:</h2>{film.length > 0 ? <ul className={style.revList}>{film.map(f => {return(<li className={style.revItem} key={f.id}><h3>{f.author}</h3> <span>{f.content}</span></li>)})}</ul> : <h3 className={style.noRev}>No reviews</h3>}</div>  
    )


}