import '../styles.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import PokemonInfo from '../components/PokemonInfo';


export default function Landing(){

 let [info, setInfo] = useState([])
 let [show, setShow] = useState(false)
 let [counter, setCounter] = useState(0)

  function getPokemon(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    // handle success
    setInfo(response.data.results);
    console.log(info)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

function showPokemon(){
    show ? setShow(false) : setShow(true)
}

function carrousel(){
   setCounter(counter+1)
}


useEffect(()=>{
    getPokemon() 
},[])


    return<>
        <div className="App">
            <h1> Landing Page!</h1>
            <button onClick={()=> showPokemon()}> Check The Available Pokemons!</button>
            { show ? 
                <div className='d-flex'>
                    {/* <span> FLECHA IZQUIERDA -></span> */}
                    <PokemonInfo value={info[counter].name} />
                    <span onClick={()=>carrousel()}> FLECHA DERECHA -></span>

                </div>: ""}
        </div>
    </>
}