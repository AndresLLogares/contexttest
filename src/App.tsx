import React from "react";
import PokemonState from "./context/actions";
import List from "./components/list";
import SinglePokemon from "./components/single";
import { makeStyles } from "@mui/styles";

function App() {
  const styles = useStyles();

  return (
    <PokemonState>
      <div className={styles.root}>
        <div className={styles.divTitle}>
          <h1
          className={styles.title}
          >Pokemon</h1>
        </div>
        <List />
        <SinglePokemon />
      </div>
    </PokemonState>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100%",
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  divTitle: {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    padding: "1rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FFF7",
    marginTop: "2rem",
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  title: {
    fontSize: "5vh",
    fontFamily: ["Mitr"].join(","),
    margin: "0",
    padding: "0",
    color: "#050505",
  },
});

export default App;
