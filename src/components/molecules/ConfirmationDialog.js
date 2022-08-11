import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { forwardRef, useContext } from "react";
import { useNavigate } from "react-router";
import { findPokemonImage } from "../../common/commonFunctions";
import PokemonContext from "../../state/PokemonContext";
import UserContext from "../../state/UserContext";
import PokemonImage from "../atoms/PokemonImage";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog = (props) => {
  const { open, handleClose } = props;
  const { user } = useContext(UserContext);
  const { pokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        PaperProps={{ style: { backgroundColor: "#f6ecde" } }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Hold on a moment!</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Make sure all the data that you entered are correct. We will not be
            responsible if the information is wrong and the Pokémon doesn't
            reach you.
          </DialogContentText>
          <div style={{ margin: "10px 0px" }}>
            <Typography>First Name: {user.firstName}</Typography>
            <Typography>Last Name: {user.lastName}</Typography>
            <Typography>Phone Number: {user.phoneNumber}</Typography>
            <Typography>Address: {user.address}</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="div" style={{ marginBottom: "5px" }}>
              Selected Pokémon: {pokemon.selectedPokemon.name.toUpperCase()}
            </Typography>

            <PokemonImage
              height="150px"
              imgSrc={findPokemonImage(pokemon.selectedPokemon)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              navigate("/confirmation", {
                state: {
                  name: pokemon.selectedPokemon.name,
                  imgSrc: findPokemonImage(pokemon.selectedPokemon),
                },
              });
            }}
          >
            Go
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
