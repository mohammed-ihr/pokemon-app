import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Typography } from "@mui/material";
import "./styles/pokemonImage.styles.css";

const PokemonImage = (props) => {
  const { imgSrc, height } = props;

  return (
    <div>
      {imgSrc ? (
        <img height={height} src={imgSrc} alt="Not found" />
      ) : (
        <div className="no-image-container">
          <div className="hide-image">
            <CatchingPokemonIcon style={{ fontSize: "65px" }} />
          </div>
          <Typography variant="subtitle2">
            Image of this Pokémon is not available{" "}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default PokemonImage;
