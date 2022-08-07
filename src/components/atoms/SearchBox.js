import { TextField } from "@mui/material";
import "./styles/searchbox.styles.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <TextField
        id="outlined-basic"
        placeholder="Search..."
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default SearchBox;
