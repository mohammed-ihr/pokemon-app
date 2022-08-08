import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

const PaginatedItems = (props) => {
  const { data, currentPage, limit, handleClick } = props;
  const noOfPages = Math.floor(data.length / limit);
  const start = (currentPage - 1) * limit;
  const end = Math.min(start + limit, data.length);
  const displayData = data.slice(start, end);

  return (
    <div>
      <Grid container spacing={2}>
        {displayData.map((item) => (
          <Grid item xs={4} md={4}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                className="display-btn"
                variant="outlined"
                onClick={handleClick}
              >
                {item.name}
              </Button>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaginatedItems