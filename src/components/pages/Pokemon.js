import Grid from "@mui/material/Grid";
import PokemonFilter from "../organisms/PokemonFilter";
import AppBar from "../molecules/AppBar";
import "./styles/pokemon.styles.css";

const Pokemon = () => {
  return (
    <div className="pokemon">
      <div className="app-bar">
        <AppBar />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PokemonFilter />
        </Grid>
        <Grid item xs={12} md={6}>
          display
        </Grid>
      </Grid>
    </div>
  );
};

export default Pokemon;
