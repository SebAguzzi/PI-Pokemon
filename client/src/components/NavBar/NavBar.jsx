import { Link } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.mainCointainer}>
            <button className={style.button}>
            <Link to='/home'>HOME</Link>
            </button>
            <button className={style.button}>
            <Link to='/form'>CREATE</Link> 
            </button>                    
        </div>
    )
}

export default NavBar;