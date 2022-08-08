import { useContext, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PokemonFilter from "../organisms/PokemonFilter";
import AppBar from "../molecules/AppBar";
import "./styles/pokemon.styles.css";
import { getAbilities, getColors, getTypes } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import PokemonDisplay from "../organisms/PokemonDisplay";

const Pokemon = () => {
  const { actions } = useContext(PokemonContext);

  const populateAbbilities = async () => {
    const res = await getAbilities();
    const abilities = await res.json();
    actions.setAbilities({...abilities, current: res.url});
  };

  const populateTypes = async () => {
    const res = await getTypes()
    const types = await res.json();
    actions.setTypes({...types, current: res.url});
  };


  const populateColors = async () => {
    const res = await getColors()
    const colors = await res.json();
    actions.setColors({...colors, current: res.url});
  };

  useEffect(() => {
    populateAbbilities();
    populateTypes();
    populateColors();

    // eslint-disable-next-line
  }, []);

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
          <PokemonDisplay />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pokemon;
