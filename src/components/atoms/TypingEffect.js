import ReactTypingEffect from "react-typing-effect";
import { popularPokemons } from "../../common/constants";
import "./styles/typingEffect.styles.css";

const pokemonNames = popularPokemons.map((data) => data.name);
const pokemonFontColors = popularPokemons.map((data) => data.color);

const TypingEffect = () => {
  return (
    <div className="typing-effect">
      <h1 style={{ color: "#fff" }}>Catch&nbsp;</h1>
      <ReactTypingEffect
        typingDelay={1500}
        eraseDelay={1500}
        cursorRenderer={(cursor) => <h1 style={{ color: "#fff" }}>{cursor}</h1>}
        text={pokemonNames}
        displayTextRenderer={(text, i) => {
          return <h1 style={{ color: pokemonFontColors[i] }}>{text}</h1>;
        }}
      />
    </div>
  );
};

export default TypingEffect;
