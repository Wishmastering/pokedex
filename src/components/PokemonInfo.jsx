import '../styles.css'
import poke_close from "../images/poke_close.png"
import poke_open from "../images/poke_open.png"
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

    function pokemonPopUp(){
            let pokeShow = document.getElementById(value)
            
            pokeShow.src = poke_open
            
            pokeShow.width = 300
            // pokeShow.classList.add = "expand-pokemon"
            function onAniEnd(){
            //  Aca fue necesario optional chainning PORQUE sino se quiebra 
            pokeShow.src = pokeInfo.sprites?.front_default
            setTimeout(()=>{
                pokeShow.classList.remove("test")
            }, 100)
            }
            pokeShow.addEventListener('transitionend', onAniEnd);

    }

    

    function pokemonOff(){
        let pokeOff = document.getElementById(value)
        pokeOff.src = poke_close
        pokeOff.classList.add("test")
    }

    useEffect(()=>{
        getPokeInfo()
    }, [])

    return<>
        <section>
            <li>
                <p>{value}</p>
            </li>
            
            {/* Imagen del pokemon */}
            <img id={value} className='test image' src={poke_close} 
            style={{width:"40%", height:"auto"}}
            onMouseEnter={()=>pokemonPopUp()} 
            onMouseLeave={()=>pokemonOff()}/>
            <button onClick={()=> console.log(pokeInfo)}> 
                Show {value} Info In The Console :DD
            </button>
        </section>
    </>
}