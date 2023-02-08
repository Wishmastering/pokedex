import '../styles.css'
import poke_close from "../images/poke_close.png"
import axios from "axios";
import { useState, useEffect } from "react";

export default function PokemonInfo({value}){

    let [pokeInfo, setPokeInfo] = useState([])
    
    function getPokeInfo(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then(function (response) {
            // handle success
            setPokeInfo(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    useEffect(()=>{
        getPokeInfo()
    }, [])

    return<>
        <section>
            <li>
                <p>{value}</p>
            </li>
            <img src='poke_close'/>
            {/* <img className='test' src={pokeInfo.sprites?.front_default} /> */}
            <button onClick={()=> console.log(pokeInfo)}> 
                Show {value} Info In The Console :D 
            </button>
        </section>
    </>
}