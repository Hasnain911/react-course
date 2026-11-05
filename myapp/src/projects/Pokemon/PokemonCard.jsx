import styles from "./Pokemon.module.css"

const PokemonCard = ({ Pokemon }) => {
  const artwork =
    Pokemon.sprites.other["official-artwork"].front_default ||
    Pokemon.sprites.front_default

  return (
    <article className={styles.pokemonCard}>
      <div className={styles.cardTop}>
        <span className={styles.badge}>
          #{String(Pokemon.id).padStart(3, "0")}
        </span>

        <span className={styles.pokemonId}>POKÉMON</span>
      </div>

      <div className={styles.artwork}>
        <div className={styles.artworkGlow}></div>

        <img
          src={artwork}
          alt={Pokemon.name}
          loading="lazy"
        />
      </div>

      <div className={styles.cardInfo}>
        <h2 className={styles.name}>{Pokemon.name}</h2>

        <div className={styles.types}>
          {Pokemon.types.map((item) => (
            <span
              key={item.type.name}
              className={`${styles.typeBadge} ${styles[item.type.name] || ""}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Height</span>
          <span className={styles.statValue}>
            {(Pokemon.height / 10).toFixed(1)} m
          </span>
        </div>

        <div className={styles.stat}>
          <span className={styles.statLabel}>Weight</span>
          <span className={styles.statValue}>
            {(Pokemon.weight / 10).toFixed(1)} kg
          </span>
        </div>
      </div>

      <div className={styles.cardFooter}>
        <span>BASE STATS</span>
        <span className={styles.cardNumber}>
          NO. {String(Pokemon.id).padStart(3, "0")}
        </span>
      </div>
    </article>
  )
}

export default PokemonCard
