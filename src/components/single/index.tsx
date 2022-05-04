import React, { useContext, memo, useEffect } from "react";
import PokemonContext from "../../context/store";
import { makeStyles } from "@mui/styles";

const SinglePokemon = () => {
  const styles = useStyles();
  const { pokemons, getPokemons, getSinglePokemon, singlePokemon } =
    useContext(PokemonContext);

  console.log(singlePokemon);

  return (
    <div className={styles.container}>
      <div className={styles.divTitle}>
        <h3 className={styles.title}>{singlePokemon?.name}</h3>
      </div>
      <div className={styles.divImg}>
        <img
          className={styles.img}
          src={singlePokemon?.sprites.other.dream_world.front_default}
          alt="pokemon"
        />
      </div>
    </div>
  );
};

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
  divImg: {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default SinglePokemon;
