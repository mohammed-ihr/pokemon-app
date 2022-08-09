import { TextField } from "@mui/material";
import "./styles/searchbox.styles.css";

const SearchBox = (props) => {
  const { value, onChange } = props;
  return (
    <div className="search-box">
      <TextField
        className="search-text-field"
        id="outlined-basic"
        placeholder="Search..."
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
      />
    </div>
  );
};

export default SearchBox;
