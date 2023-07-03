import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/home";
import { Movies } from "pages/Movies/movies";
import { Element } from "pages/Elements/elements";
import { Cast } from "../Cast/cast";
import { Reviews } from "../Rewiews/rewiews";
import style from "./style.module.css"




export const App = () => {
  return (
    <div>
      <nav>
        <ul className={style.navList}>
          <li className={style.item}><NavLink className={style.navLink} to="/">Home</NavLink></li>
          <li className={style.item}><NavLink className={style.navLink} to="/movies">Movies</NavLink></li>
        </ul>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<div><Home/></div>} />
        <Route path="/movies" element={<div><Movies/></div>} />
        <Route path="/movies/:movieId" element={<div><Element/></div>}>
          <Route path="cast" element={<div><Cast/></div>}/>
          <Route path="rewiews" element={<div><Reviews/></div>}/>
        </Route>
      </Routes>
    </div>
  );
};
