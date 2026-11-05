import { useState, useEffect } from "react"

const WrongPokemonDataFetching = () => {
  // Initially Pokemon ki value null hai, kyunki abhi API data nahi aaya.
  const [Pokemon, setPokemon] = useState(null);

  // API ka URL ek variable mein store kiya hai.
  const Api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // useEffect component mount hone par chalega.
  // [] ki wajah se effect har state update par dobara nahi chalega.
  useEffect(() => {

    // Yeh try sirf un errors ko catch kar sakta hai
    // jo isi synchronous execution mein throw hon.
    try {
      // Console mein message print hoga.
      console.log("useEffect initialized");
        // Jaan-bujh kar error generate kiya
    // console.log(undefinedVariable);
      

      // Async function banaya jo API se data fetch karega.
      const FetchData = async () => {

        // API request complete hone ka wait karega.
        const response = await fetch(Api);

        // Response body ko JSON data mein convert karega.
        const data = await response.json();

        // Console mein API ka data dikhayega.
        console.log(data);

        // State update karega, jis se component re-render hoga.
        setPokemon(data);
      };

// Async function call kiya.
 // Async function Promise return karta hai (fulfilled ya rejected).
// Agar Promise ko await nahi karte, outer try...catch
// uske asynchronous rejection ko catch nahi kar sakta,
// kyunki try block apna execution complete kar chuka hota hai.
FetchData();
    

    } catch (error) {
      // Sirf outer try ke scope mein pakray gaye errors print honge.
      console.log(error.message);
    }
  }, []);

  // Jab Pokemon null hoga, Loading render hoga.
  // API data aane ke baad Pokemon object ban jayega.
  if (!Pokemon) return <p>Loading...</p>;

 

  return (
    <>
      <h1>Name : {Pokemon.name}</h1>
      <img
   src={Pokemon.sprites.other["official-artwork"].front_default}
        alt={Pokemon.name}
      />
      <div>Height : {Pokemon.height}</div>
      <div>Weight : {Pokemon.weight}</div>
    </>
  )
}

export default WrongPokemonDataFetching
