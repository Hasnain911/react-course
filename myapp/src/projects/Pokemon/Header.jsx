import styles from "./Pokemon.module.css"

const Header = ({ Pokemon, search, setSearch }) => {



  return (
    <header className={styles.header}>
      <span className={styles.eyebrow}>THE POKÉDEX COLLECTION</span>

      <h1 className={styles.title}>
        Explore <span>Pokémon.</span>
      </h1>

      <p className={styles.subtitle}>Discover your next favourite Pokémon.</p>

      <div className={styles.collectionCount}>
        <span className={styles.liveDot}></span>
        {Pokemon.length} Pokémon discovered
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search Pokemon"
        />
      </div>
    </header>
  )
}

export default Header
