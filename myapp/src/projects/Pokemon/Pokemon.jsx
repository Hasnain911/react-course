import { useState, useEffect } from "react"
import styles from "./Pokemon.module.css"
import PokemonCard from "./PokemonCard"
import Header from "./Header"

const Pokemon = () => {
  // 1. Pokemon state mein initially null hai, kyunki abhi data nahi aaya.
  const [Pokemon, setPokemon] = useState([])
  const [Loading,setLoading] = useState(true)

  // 2. Error state mein API failure ka message store hoga.
  const [error, setError] = useState(null)

  const [search,setSearch] = useState("")

  // 3. API URL jahan se 20 Pokémon ki list fetch hogi.
  const Api = "https://pokeapi.co/api/v2/pokemon?limit=20"

  // 4. Async function banaya taake API requests par await use kar sakein.
  const FetchData = async () => {
    try {
      // 5. Pehli API request bheji jo 20 Pokémon ke names aur URLs degi.
      const response = await fetch(Api)

      // 6. Check kiya ke HTTP response successful hai ya nahi.
      if (!response.ok) {
        // 7. Failure par error throw hoga aur control catch mein jayega.
        throw new Error("Pokémon list of 20 being fetched!")
      }

      // 8. Successful response ko JSON data mein convert kiya.
      const pokemonData = await response.json()

      // 9. Pehli API ka complete data console mein dekha.
    //   console.log(pokemonData)

      // 10. Results se 20 Pokémon ke names aur URLs nikale.
      const arrOfPokemonData = pokemonData.results

      // 11. Names aur URLs wali array console mein dekhi.
    //   console.log(arrOfPokemonData)

      // 12. Har Pokémon ke URL par doosri API request bheji.
      const mapArrOfPokemonData = arrOfPokemonData.map(async (currelem) => {
        // 13. Current Pokémon ki individual details fetch ki.
        const response = await fetch(currelem.url)

        // 14. Check kiya ke individual request successful hai ya nahi.
        if (!response.ok) {
          // 15. Failure par error throw hoga aur Promise.all reject hoga.
          throw new Error("Pokémon ki details fetch nahi ho sakin!")
        }

        // 16. Current Pokémon ki response ko JSON mein convert karke return kiya.
        return await response.json()
      })
console.log(mapArrOfPokemonData);

      // 17. Sabhi 20 requests complete hone ka wait kiya.
      const allPokemonData = await Promise.all(mapArrOfPokemonData)

      // 18. Sabhi Pokémon ki complete details console mein dekhin.
    //   console.log(allPokemonData)

      // 19. Saara data state mein store kiya, jis se component re-render hoga.
      setPokemon(allPokemonData)
    } catch (error) {
      // 20. Kisi bhi request ya JSON processing mein error aaye to message store hoga.
      setError(error.message)
    }finally{
      setLoading(false)
    }
  }

  // 21. Component mount hone par effect execute hoga.
  useEffect(() => {
    // 22. Confirm kiya ke effect execute hua.
    console.log("useEffect initialized")

    // 23. API fetching function call kiya.
    FetchData()
    

  }, [])
// console.log(Pokemon)

// 1. Pokemon array par filter() laga kar matching Pokémon ki new array banayi.
const searchPokemon = Pokemon.filter((currpoke) => {

  // 2. Current Pokémon ka name lowercase mein convert kiya.
  // 3. Search input ki value ko bhi lowercase mein convert kiya.
  // 4. includes() check karta hai ke Pokémon name mein search text mojood hai ya nahi.
  // 5. Match milne par true return hota hai aur Pokémon filtered array mein include hota hai.
  return currpoke.name.toLowerCase().includes(search.toLowerCase());
});

// 6. Filter hone ke baad matching Pokémon ki array console mein dekhi.
console.log(searchPokemon);


  // 24. Error message hai to error screen render hogi.
  if (error) {
    return <p className={styles.error}>{error}</p>
  }

  // 25. Data abhi null hai to loading message render hoga.
  if (Loading) {
    return <p className={styles.loading}>Loading Pokémon...</p>
  }

  return (

<main className={styles.container}>

      <Header Pokemon={Pokemon} search= {search} setSearch = {setSearch} />

      <div className={styles.pokemonGrid}>
        {searchPokemon.length === 0 ? (<p  className={styles.noResults}>No Pokemon Found</p>) : (searchPokemon.map((currelem) => (
          <PokemonCard key={currelem.id} Pokemon={currelem} />
        )))}
        
      </div>

      <footer className={styles.footer}>
        <span>POKÉDEX</span>
        <span>Gotta catch 'em all.</span>
      </footer>
    </main>
  )
}

export default Pokemon
