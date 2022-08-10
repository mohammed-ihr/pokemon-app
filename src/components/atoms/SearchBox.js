import { TextField } from "@mui/material";
import "./styles/searchbox.styles.css";

const SearchBox = (props) => {
  const { value, onChange, onEnterKeyPressed } = props;
  return (
    <div className="search-box">
      <TextField
        className="search-text-field"
        id="outlined-basic"
        placeholder="Search..."
        variant="outlined"
        value={value}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onEnterKeyPressed();
            e.preventDefault();
          }
        }}
        fullWidth
      />
    </div>
  );
};

export default SearchBox;
