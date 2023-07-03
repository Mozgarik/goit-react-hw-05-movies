import { PopularList } from "components/Popular/popular"
import style from './style.module.css'

export function Home() {
return (
    <div>
        <h1 className={style.title}>Trading today:</h1>
        <ul>
            <PopularList/>
        </ul>
    </div>
    )   
}