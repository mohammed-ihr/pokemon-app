import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import PokemonContext from "../../state/PokemonContext";
import "./styles/filterTabs.styles.css";

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
  const { pokemon } = useContext(PokemonContext);
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <div className="filter-tabs">
      <Box
        sx={{ bgcolor: "background.paper", width: "100%", marginRight: "10px" }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Abilities" {...a11yProps(0)} />
            <Tab label="Type" {...a11yProps(1)} />
            <Tab label="Color" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={2}>
            {pokemon.abilities.results.map((ability) => (
              <Grid item xs={4} md={4}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className="ability-btn" variant="outlined">
                    {ability.name}
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
          <div className="navigation-container">
            <IconButton size="large" >
              <NavigateBeforeIcon className='nav-icon'/>
            </IconButton>

            <IconButton size="large">
              <NavigateNextIcon className='nav-icon'/>
            </IconButton>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Type
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Color
        </TabPanel>
      </Box>
    </div>
  );
};

export default FilterTabs;
