import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import "./styles/paginatedItems.styles.css";

const PaginatedItems = (props) => {
  const { data, currentPage, limit, setPage, onClick, selected } = props;

  const noOfPages = Math.ceil(data.length / limit);
  const start = (currentPage - 1) * limit;
  const end = Math.min(start + limit, data.length);
  const displayData = data.slice(start, end);

  return (
    <div className="paginated-items">
      <div className="grid-container">
        <Grid container spacing={2}>
          {displayData.map((item) => (
            <Grid item xs={4} md={4} key={item.name}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  className={
                    item.name === selected
                      ? "display-btn-selected"
                      : "display-btn"
                  }
                  variant="outlined"
                  onClick={() => onClick(item)}
                >
                  {item.name}
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="pagination-container">
        <Pagination
          // variant="outlined"
          style={{ color: "yellow" }}
          count={noOfPages}
          page={currentPage}
          onChange={(event, page) => {
            setPage(page);
          }}
          color="primary"
        />
      </div>
    </div>
  );
};

export default PaginatedItems;
