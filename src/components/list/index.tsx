import React, { useContext, memo, useEffect } from "react";
import PokemonContext from "../../context/store";
import { makeStyles } from "@mui/styles";

const ListPokemon = memo(() => {
  const styles = useStyles();
  const { pokemons, getPokemons, getSinglePokemon } =
    useContext(PokemonContext);

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.divTitle}>
        <h3 className={styles.title}>Pokemon List</h3>
      </div>
      <ul className={styles.list}>
        {pokemons.map((pokemon: any, index: number) => (
          <button
            key={index}
            onClick={() => getSinglePokemon(index + 1)}
            className={styles.button}
          >
            {pokemon.name}
          </button>
        ))}
      </ul>
    </div>
  );
});

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "95%",
    height: "fit-content",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  divTitle: {
    display: "flex",
    width: "fit-content",
    padding: "1rem",
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FFF7",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  title: {
    fontSize: "3vh",
    fontFamily: ["Mitr"].join(","),
    margin: "0",
    padding: "0",
    color: "#050505",
  },
  list: {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  button: {
    display: "flex",
    width: "15rem",
    height: "5rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FFF7",
    borderRadius: "10px",
    marginBottom: "1rem",
    fontSize: "3vh",
    fontFamily: ["Mitr"].join(","),
    border: "none",
    color: "#050505",
    "&:hover": {
      backgroundColor: "#4ECDC4",
      color: "#F7FFF7",
      cursor: "pointer",
    },
  },
});

export default ListPokemon;
