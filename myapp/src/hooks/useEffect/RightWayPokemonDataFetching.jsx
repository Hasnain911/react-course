import { useState, useEffect } from "react"
import styles from "./Pokemon-1.module.css";
const RightWayPokemonDataFetching = () => {
  // Initially Pokemon ki value null hai, kyunki abhi API data nahi aaya.
  const [Pokemon, setPokemon] = useState(null);
  

  // API ka URL ek variable mein store kiya hai.
  const Api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // useEffect component mount hone par chalega.
  // [] ki wajah se effect har state update par dobara nahi chalega.
   const FetchData = async () => {
    try {
      const response = await fetch(Api);
      const data = await response.json();

      console.log(data);
      setPokemon(data);
    } catch (error) {
      console.log(error.message);
    }
  }; // FetchData function yahan close hua
  
 useEffect(() => {
  console.log("useEffect initialized");
FetchData(); // Function call
}, []);

  // Jab Pokemon null hoga, Loading render hoga.
  // API data aane ke baad Pokemon object ban jayega.
if (!Pokemon) return <p className={styles.loading}>Loading...</p>;

return (
  <div className={styles.container}>
    <div className={styles.pokemonCard}>
      <span className={styles.badge}>Pika Pika</span>

      <h1 className={styles.name}>Name: {Pokemon.name}</h1>

      <div className={styles.artwork}>
        <img
          src={Pokemon.sprites.other["official-artwork"].front_default}
          alt={Pokemon.name}
        />
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Height</span>
          <span className={styles.statValue}>{Pokemon.height}</span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statLabel}>Weight</span>
          <span className={styles.statValue}>{Pokemon.weight}</span>
        </div>
      </div>
    </div>
  </div>
)
}

export default RightWayPokemonDataFetching



// Notes:
// useEffect(() => {
// async function getData() {
//   try {
//     // 1. API request ka wait
//     const response = await fetch(url);

//     // 2. JSON conversion ka wait
//     const data = await response.json();

//     // 3. Data use karo
//     console.log(data);

//   } catch (error) {
//     // 4. Request ya JSON conversion ka error handle karo
//     console.log(error.message);
//   }
// }

// getData();
// }, []);