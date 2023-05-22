import { Link } from "react-router-dom";
import logopokemon from "../../images/logopokemon.png"


const Landing = () => {
    return (
        <div>
            <Link to='/home'>
                <img src={logopokemon} alt="" />
            </Link>
        </div>
    )
}

export default Landing;