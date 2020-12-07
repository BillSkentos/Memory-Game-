import  {React, createContext , useContext ,useState } from 'react';
import useFetch from './useFetch';


const PokemonContext = createContext(); 

export default function ScoreProvider(props) {
 
  const {pokemon} = useFetch(); 
  const pokeNum = pokemon.length; //get number of fetched pokemon 

  const [clicked,setClicked] = useState([]); //will hold pokemon names 
  const [score,setScore] = useState(0); //will hold app score 
  const [topScore , setTopScore] = useState(0); // holds top score 
  const [hasWon , setHasWon] = useState(false); //game state 




  const checkClicked = (poke)=>{
   
    if(clicked.includes(poke)===false){  //if pokemon name is not in array 
      addClicked(poke); //add pokemon in array 
      changeScore(); //score = score +1
      if(score===pokeNum-1){
        setHasWon(true);
      }
    }else{
      if(score>topScore){
        setTopScore(score)
      }
      resetGame(); //reset game if pokemon already in array 
    }

  }  

  const addClicked = (e)=>{
    setClicked(oldstate=>[...oldstate,e])
  }


  const changeScore = ()=>{
    setScore(score+1);
  }

  const resetGame = ()=>{
    setClicked([]);
    setScore(0);
    setHasWon(false);
  }

  const value = {
    score,
    setScore,
    clicked,
    setClicked,
    changeScore,
    addClicked,
    checkClicked,
    resetGame,
    topScore,
    setTopScore,
    hasWon
  }


  
  return (
    <PokemonContext.Provider value = {value}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = ()=>{ //give access to my other components to values 
  return useContext(PokemonContext);
}
