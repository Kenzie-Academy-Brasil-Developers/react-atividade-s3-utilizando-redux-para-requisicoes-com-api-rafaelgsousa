import { useSelector } from "react-redux";

const Digimons = () => {

    const {digimons} = useSelector((state)=>state)
    //ou const digimons = useSelector(store => store.digimons)
    return (
        <>
        {console.log(digimons)}
            <ul>
                {digimons.map((e,i)=><li key={i}>{e}</li>)}
            </ul>
        </>
    )
}

export default Digimons;