import '../styles.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import PokemonInfo from '../components/PokemonInfo';


export default function Landing(){

 let [info, setInfo] = useState([])
 let [show, setShow] = useState(false)

  function getPokemon(){
    axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    // handle success
    setInfo(response.data.results);
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
            <ul>
                {info.map((item,index) =>
                <div key={index}>
                    <PokemonInfo value={item.name}/>
                </div>)
                }
            </ul> : ""}
        </div>
    </>
}