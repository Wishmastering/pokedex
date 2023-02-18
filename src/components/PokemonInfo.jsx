import '../styles.css'
import poke_close from "../images/poke_close.png"
import poke_open from "../images/poke_open.png"
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import PokemonContext from '../page/Context';

export default function PokemonInfo({value}){

    const [store,actions] = useContext(PokemonContext)

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
        pokemon.classList.add("pokeball-animation")
        
        function onAniEnded(){
            pokemon.src = pokeInfo.sprites?.front_default
            setTimeout(()=>{
                pokemon.classList.remove("pokeball-animation")
            }, 150)
        }
        pokemon.addEventListener('transitionend', onAniEnded)
    }

    function pokeballClose(){
        let pokemonImage = document.getElementById(value);
        pokemonImage.src = poke_close
    }

    // definir una funcion y llamar y colocarle imagen en el src: poke_close

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
        getPokeInfo();
        pokeballClose();
    }, [value])

    return<>
        <section>
            
                <p>{value}</p>
            
            
            {/* Imagen del pokemon */}
            <div className='image-wrapper'>
                <span onClick={()=> actions.setCounter()}></span>
            
                <img id={value} className='' src={poke_close} 
                style={{width:"40%", height:"auto"}}
                // === === === === === === === === === === === ===
                // Estas eran para el HOVER EFFECT para practicar
                // === === === === === === === === === === === ===
                // onMouseEnter={()=>pokemonPopUp()} 
                // onMouseLeave={()=>pokemonOff()}
                />  
                <span onClick={()=> actions.setCounter("derecha")}></span>
            </div>
            <button onClick={()=> showPokemon()}> 
                Click Here to see {value} 
            </button>
        </section>
    </>
}