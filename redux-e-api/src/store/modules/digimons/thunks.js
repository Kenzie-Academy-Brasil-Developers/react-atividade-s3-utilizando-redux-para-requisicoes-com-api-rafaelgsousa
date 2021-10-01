import axios from "axios";

import {addDigimon} from "./actions";

const addDigimonThunk = (input)=> (dispatch,getState)=> {

    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${input}`)
    .then(resp=>dispatch(addDigimon({name:resp.data[0].name,img:resp.data[0].img,level:resp.data[0].level})))
    .catch(err=>console.log(err))
    /*const {digimon}= getState();

    const digimon = {...digimon, digimons:[...digimons.digimon, input] }

    dispatch(addDigimon(digimon))*/

}

export default addDigimonThunk;