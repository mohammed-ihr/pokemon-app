import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { sortArrayOfObjectsByProperty } from "../../common/commonFunctions";
import { getUserFromLocalStorage } from "../../helpers/localStorage";
import { getAbilities, getTypes } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import AppBar from "../molecules/AppBar";
import PokemonDisplay from "../organisms/PokemonDisplay";
import PokemonFilter from "../organisms/PokemonFilter";
import "./styles/pokemon.styles.css";

const Pokemon = () => {
  const { actions } = useContext(PokemonContext);
  const navigate = useNavigate();

  const populateAbbilities = async () => {
    const res = await getAbilities();
    let abilities = await res.json();
    abilities = sortArrayOfObjectsByProperty(abilities.results, "name");
    actions.setAbilities(abilities);
  };

  const populateTypes = async () => {
    const res = await getTypes();
    let types = await res.json();
    types = sortArrayOfObjectsByProperty(types.results, "name");
    actions.setTypes(types);
  };

  useEffect(() => {
    if (
      getUserFromLocalStorage() === null ||
      getUserFromLocalStorage().firstName === ""
    ) {
      navigate("/");
      return;
    }

    populateAbbilities();
    populateTypes();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="pokemon">
      <div className="app-bar">
        <AppBar />
      </div>
      <div className="pokemon-contents">
        <div className="filter-container">
          <PokemonFilter />
        </div>
        <div className="display-container">
          <PokemonDisplay />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
