import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./styles/userInfoForm.styles.css";

const UserInfoForm = () => {
  return (
    <div className="user-info-form">
      <div className="heading">
        <Typography variant="h4" component="div">
          Let's get started!
        </Typography>
      </div>
      <div className="first-row">
        <TextField
          required
          id="filled-required"
          label="First Name"
          fullWidth
          variant="standard"
        />
      </div>
      <div className="row">
        <TextField
          required
          id="filled-required"
          label="Last Name"
          //   placeholder="Enter your last name"
          fullWidth
          variant="standard"
        />
      </div>

      <div className="row">
        <TextField
          required
          id="filled-required"
          label="Phone Number"
          //   placeholder="Enter your phone number"
          fullWidth
          variant="standard"
        />
      </div>

      <div className="row">
        <TextField
          required
          id="filled-required"
          label="Address"
          //   placeholder="Enter your address"
          fullWidth
          variant="standard"
        />
      </div>

      <div className="next-section">
        <Button variant="contained" style={{width: 150}}>Next</Button>
      </div>
    </div>
  );
};

export default UserInfoForm;
