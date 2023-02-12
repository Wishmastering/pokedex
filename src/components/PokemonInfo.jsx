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

    function showPokemon(){
        let pokemon = document.getElementById(value);
        pokemon.src = poke_open;
        pokemon.classList.add("test")
        
        function onAniEnded(){
            pokemon.src = pokeInfo.sprites?.front_default
            setTimeout(()=>{
                pokemon.classList.remove("test")
            }, 150)
        }
        pokemon.addEventListener('transitionend', onAniEnded);

    }

    // ESTE CODIGO ERA PARA EL HOVER en MOUSEENTER Y MOUSELEAVE

//     function pokemonPopUp(){
//         let pokeShow = document.getElementById(value)
        
//         pokeShow.src = poke_open
        
//         pokeShow.width = 300
//         // pokeShow.classList.add = "expand-pokemon"
//         function onAniEnd(){
//         //  Aca fue necesario optional chainning PORQUE sino se quiebra 
//         pokeShow.src = pokeInfo.sprites?.front_default
//         setTimeout(()=>{
//             pokeShow.classList.remove("test")
//         }, 100)
//         }
//         pokeShow.addEventListener('transitionend', onAniEnd);

// }


    // function pokemonOff(){
    //     let pokeOff = document.getElementById(value)
    //     pokeOff.src = poke_close
    //     pokeOff.classList.add("test")
    // }

    useEffect(()=>{
        getPokeInfo()
    }, [value])

    return<>
        <section>
            <li>
                <p>{value}</p>
            </li>
            
            {/* Imagen del pokemon */}
            <img id={value} className='image' src={poke_close} 
            style={{width:"40%", height:"auto"}}
            onFocus={()=>console.log("Hola HHHH")}
            // === === === === === === === === === === === ===
            // Estas eran para el HOVER EFFECT para practicar
            // === === === === === === === === === === === ===
            // onMouseEnter={()=>pokemonPopUp()} 
            // onMouseLeave={()=>pokemonOff()}
            />
            <button onClick={()=> showPokemon()}> 
                Click Here to see {value} 
            </button>
        </section>
    </>
}