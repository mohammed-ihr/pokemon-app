import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import TypingEffect from "../atoms/TypingEffect";
import UserInfoForm from "../organisms/UserInfoForm";
import "./styles/userInfo.styles.css";

const UserInfo = () => (
  <div className="user-info">
    <div className="pokeball-container">
      <div id="typing-effect-container-left">
        <TypingEffect />
      </div>
      <CatchingPokemonIcon className="pokemon-icon" />
    </div>
    <div className="user-info-form-container">
      <div id="typing-effect-container-right">
        <TypingEffect />
      </div>
      <UserInfoForm />
    </div>
  </div>
);

export default UserInfo;
