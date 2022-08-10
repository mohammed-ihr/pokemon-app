import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import UserContext from "../../state/UserContext";

const AppBar = () => {
  const { user } = useContext(UserContext);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMON
        </Typography>
        <Typography variant="subtitle1" component="div" >
          {user.firstName}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
