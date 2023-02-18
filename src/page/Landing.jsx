import '../styles.css';
import React, {useState, useEffect, useContext} from "react";
import PokemonInfo from '../components/PokemonInfo';
import PokemonContext from './Context';


export default function Landing(){


const [store,actions] = useContext(PokemonContext) // Consumir contexto

 
 let [show, setShow] = useState(false)

function showPokemon(){
    show ? setShow(false) : setShow(true)
}

useEffect(()=>{
    actions.getPokemon() 
},[])


    return<>
        <div className="App">
          <button onClick={()=> console.log(store?.pokemonList[store.counter]?.name)}>
             Consoole log</button>
            <h1> Landing Page!</h1>
            <button onClick={()=> showPokemon()}> Check The Available Pokemons!</button>
              { show ? 
                  <div className='d-flex'>
                      <PokemonInfo value={store?.pokemonList[store.counter]?.name} />
                  </div>: ""
              }
        </div>
    </>
}