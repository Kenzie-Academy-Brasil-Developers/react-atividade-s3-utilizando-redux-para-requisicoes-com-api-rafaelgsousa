import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks"

const Search = () => {

    const dispatch = useDispatch()

    const [input,setInput] = useState("");
    const [error,setError] = useState(false);

    const handleSearch = ()=>{
        setError(false)
        dispatch(addDigimonsThunk(input,error))
        setInput("");
    }

    return (
        <div>
            <h2>Procure pelo seu Digimon!</h2>
            <div>
                <input value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Procure seu Digimon">
                </input>
                <button disabled={!input} onClick={handleSearch}>Pesquisar</button>
            </div>
        </div>
    )
}

export default Search;