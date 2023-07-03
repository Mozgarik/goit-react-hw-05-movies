import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { fetchMovieById } from "service/Api";
import { Link } from "react-router-dom";
import style from './style.module.css'


export function Element() {
    const [film, setFilm] = useState()
    
    const params = useParams()
    
    useEffect(() => {
        fetchMovieById(params.movieId).then(r => setFilm(r))
    }, [])
    
    function filmPoster(f) {
        return `https://image.tmdb.org/t/p/w400/${f}`
       }

    if (film) {
        return (
            <section className={style.filmSection}> 
                <button className={style.backButton}><a className={style.buttonLink} href="/goit-react-hw-05-movies">Back</a></button>
                
                <div className={style.filmInfo}>
               <div>
               <img src={film.poster_path ? filmPoster(film.poster_path) : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}  alt="" />
               </div>
               <div className={style.rightInfo}>
                <h1 className={style.filmName}>{film.title}</h1>
                <h4>Owerwiew:</h4>
               <span className={style.spanOwer}>{film.overview}</span>
               <h4>Geners:</h4>
               <span>{film.genres ? film.genres.map(g => {return ( <li key={g.id}>{g.name}</li> )}) : "no ganres"}</span>
               </div>
                </div>
               <div className={style.border}>
                <h3 className={style.addInfo}>Additional information:</h3>
               <ul className={style.addList}>
                <Link className={style.addLink} to={`cast`}><li className={style.addItem}>Cast</li></Link> 
                <Link className={style.addLink} to={`rewiews`}><li className={style.addItem}>Rewiews</li></Link> 
               </ul>
               </div>
               
               <Outlet/>
            </section>
                 
        )    
    }
}