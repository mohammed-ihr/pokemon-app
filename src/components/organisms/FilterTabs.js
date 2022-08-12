import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { getDatafromURL, getSinglePokemon } from "../../network/pokemon.api";
import PokemonContext from "../../state/PokemonContext";
import PaginatedItems from "../molecules/PaginatedItems";
import {
  addOrderedIdTOArrayOfObjects,
  sortArrayOfObjectsByProperty,
} from "../../common/commonFunctions";
import "./styles/filterTabs.styles.css";
import Snackbar from "../molecules/SnackBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const FilterTabs = () => {
  const { pokemon, filterInput, actions } = useContext(PokemonContext);
  const theme = useTheme();

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleTabChange = (event, newValue) => {
    actions.setSelectedTab(newValue);
  };

  const handleClickInsidePagination = async (url) => {
    const res = await getDatafromURL(url);
    const resJson = await res.json();
    let pokemons = resJson.pokemon.map((data) => data.pokemon);
    pokemons = sortArrayOfObjectsByProperty(pokemons, "name");
    pokemons = addOrderedIdTOArrayOfObjects(pokemons);
    actions.setPokemons(pokemons);

    // get the first pokemon data from the list
    if (pokemons.length > 0) {
      const pokemonRes = await getSinglePokemon(pokemons[0].name);
      const pokemon = await pokemonRes.json();
      actions.setSelectedPokemon(pokemon);
      actions.setSelectedIndexInAutoComplete(0);
    } else setOpenSnackBar(true);
  };

  const handleAbilityClick = (data) => {
    actions.setSelectedAbility(data.name);
    handleClickInsidePagination(data.url);
  };
  const handleTypeClick = (data) => {
    actions.setSelectedType(data.name);
    handleClickInsidePagination(data.url);
  };

  return (
    <div className="filter-tabs">
      <Snackbar
        message="Oops! There are no Pokémons of the selected criteria."
        setOpen={setOpenSnackBar}
        open={openSnackBar}
      />
      <Box sx={{ width: "100%", marginRight: "10px" }}>
        <AppBar position="static">
          <Tabs
            value={filterInput.selectedTab}
            onChange={handleTabChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Ability" {...a11yProps(0)} />
            <Tab label="Type" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={filterInput.selectedTab} index={0} dir={theme.direction}>
          <PaginatedItems
            data={pokemon.abilities}
            currentPage={filterInput.currentAbilityPage}
            limit={12}
            setPage={(pageNo) => actions.setCurrentAbilityPage(pageNo)}
            onClick={(data) => handleAbilityClick(data)}
            selected={filterInput.selectedAbility}
          />
        </TabPanel>
        <TabPanel value={filterInput.selectedTab} index={1} dir={theme.direction}>
          <PaginatedItems
            data={pokemon.types}
            currentPage={filterInput.currentTypePage}
            limit={12}
            setPage={(pageNo) => actions.setCurrentTypePage(pageNo)}
            onClick={(data) => handleTypeClick(data)}
            selected={filterInput.selectedType}
          />
        </TabPanel>
      </Box>
    </div>
  );
};

export default FilterTabs;
