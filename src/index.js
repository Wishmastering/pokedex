import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import PokemonContext from "./page/Context"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ContextWrapper>
        <Layout />
      </ContextWrapper>
  </React.StrictMode>
);

function ContextWrapper({children}){
  
  let [store,setStore] = useState({
    pokemon: "Ha ",
    pokemonList: [],
    counter: 0,
  })
  let actions = {
    getPokemon: ()=>{
      console.log(store.pokemon)
    },
    getPokemonList: ()=>{
      console.log(store.pokemonList)
    },
    setCounter:(parameter)=>{
      parameter ? setStore({...store, counter: store.counter+1}) 
                   : 
                  store.counter === 0 ? setStore({...store, counter: store.counter-1})
                                  :
                                  setStore({...store, counter: store.counter-1})
    }
  }

  return<>
  <PokemonContext.Provider value={[store,actions]}>
    {children}
  </PokemonContext.Provider>
  </>
}