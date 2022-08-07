import MuiAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMON
        </Typography>
        <Button color="inherit">User</Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
