  import React  from 'react';
  import useFetch from './useFetch';
  import PokeCard from './pokeCard';
  import '../App.css';
  import {usePokemon} from './ScoreContext';
  import Loader from 'react-loader-spinner';

  export default function PokeList() {

    const {pokemon,fetchPokemon,loading,fetchedOnce} = useFetch();  //get fetch data  
    const {checkClicked} = usePokemon(); //get function from context api to update score 
    const fetchAndCheck = (name)=>{  //when you click on a pokemon check if it is clicked and refetch and shuffle pokemon 
      checkClicked(name);
      fetchPokemon();
    }

    return ( 
      <ul className="pokemon-list">
        { (loading && !fetchedOnce)? //show loading component only on first fetch 
          <Loader
            className = "loading-spinner"
            type="ThreeDots"
            color="#00008b"
            height={100}
            width={100}
          /> 
        : 
          pokemon.map((poke)=>{  //pokemon cards 
          return( 
          <li key = {poke.id} onClick={()=>fetchAndCheck(poke.name)}>
            <PokeCard  picture = {poke.sprites['front_default']} name = {poke.name}/>
          </li>);
          })
        }
       
      </ul> 
    )
  }