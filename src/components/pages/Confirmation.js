import { Typography } from "@mui/material";
import "./styles/confirmation.styles.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/pokemon");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {location.state && (
        <div className="confirmation">
          <div className="confirmation-container">
            <div className="icon">
              <CheckCircleOutlineIcon
                style={{ fontSize: "150px", color: "green" }}
              />
            </div>

            <Typography variant="h4">
              What a catch! You have successfully caught{" "}
              <b>{location.state?.name.toUpperCase() ?? ""}</b>.
            </Typography>

            <Typography variant="h6">
              See you in battle. Untill then, train well!
            </Typography>

            <div className="image-container">
              <img
                height="200px"
                src={location.state?.imgSrc ?? ""}
                alt="new"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Confirmation;
