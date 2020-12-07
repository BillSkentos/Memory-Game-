import {React , useState , useEffect} from 'react';

export default function useFetch() {
  
  const [ pokemon,setPokemon] = useState([]);
  const [loading , setLoading ] = useState(false);
  const [fetchedOnce,hasFetchedOnce] = useState(false); //checks if I have fetched the first time 

  const shuffle = (array) =>{ 
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const fetchPokemon = async () =>{ 
    setLoading(true);
    const promises = [];
    //get pokemon from API 
    for (let i=1;i<=16;i++){
      let  url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      let response = await fetch(url);
      let result = await response.json();
      promises.push(result);
    }

    const data = await Promise.all(promises);
    setPokemon(shuffle(data)); //store shuffled pokemon data in array 
    setLoading(false);
    hasFetchedOnce(true);
  }
  
  useEffect(()=>{
    fetchPokemon();
  },[])
 
  return {pokemon ,setPokemon ,fetchPokemon,shuffle,loading,fetchedOnce}; 

}
