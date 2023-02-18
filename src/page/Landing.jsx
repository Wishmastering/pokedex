import '../styles.css';
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import PokemonInfo from '../components/PokemonInfo';
import PokemonContext from './Context';


export default function Landing(){


const [store,actions] = useContext(PokemonContext) // Consumir contexto

 let [info, setInfo] = useState([])
 let [show, setShow] = useState(false)

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

useEffect(()=>{
    getPokemon() 
},[])


    return<>
        <div className="App">
            <h1> Landing Page!</h1>
            <button onClick={()=> showPokemon()}> Check The Available Pokemons!</button>
              { show ? 
                  <div className='d-flex'>
                      <PokemonInfo value={info[store.counter].name} />
                  </div>: ""
              }
        </div>
    </>
}