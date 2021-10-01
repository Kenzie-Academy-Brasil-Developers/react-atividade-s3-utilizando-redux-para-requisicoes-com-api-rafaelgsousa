import { useSelector } from "react-redux";
import "./style.css"

const Digimons = () => {

    const {digimons} = useSelector((state)=>state)
    //ou const digimons = useSelector(store => store.digimons)
    return (
        <>
            <ul>
                {digimons.map((e,i)=><li key={i}>
                    <h3>{e.name}</h3>
                    <img src={e.img} alt="img"/>
                    <p>{e.level}</p>
                    </li>)}
            </ul>
        </>
    )
}

export default Digimons;