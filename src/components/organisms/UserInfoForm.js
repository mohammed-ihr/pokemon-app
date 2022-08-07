import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./styles/userInfoForm.styles.css";

const UserInfoForm = () => {
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    address: false,
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });

  const isDisabled = () => {
    if (Object.values(user).some((info) => info === "")) return true;
    if (Object.values(error).some((errorState) => errorState === true))
      return true;
    return false;
  };

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
          value={user.firstName}
          helperText={error.firstName ? "Please enter a valid first name." : ""}
          error={error.firstName}
          onChange={(e) => {
            let isValid = true;
            if (e.target.value) {
              isValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(
                e.target.value.trim()
              );
            }
            setError({
              ...error,
              firstName: !isValid,
            });
            setUser({ ...user, firstName: e.target.value });
          }}
        />
      </div>
      <div className="row">
        <TextField
          required
          id="filled-required"
          label="Last Name"
          fullWidth
          variant="standard"
          error={error.lastName}
          helperText={error.lastName ? "Please enter a valid last name." : " "}
          onChange={(e) => {
            let isValid = true;
            if (e.target.value) {
              isValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(
                e.target.value.trim()
              );
            }
            setError({
              ...error,
              lastName: !isValid,
            });
            setUser({ ...user, lastName: e.target.value });
          }}
        />
      </div>

      <div className="row">
        <TextField
          required
          id="filled-required"
          label="Phone Number"
          fullWidth
          variant="standard"
          value={user.phoneNumber}
          error={error.phoneNumber}
          helperText={
            error.phoneNumber ? "Please enter a valid phone number." : ""
          }
          onChange={(e) => {
            if (
              !/^[0-9 ( ) -]*$/g.test(e.target.value) ||
              e.target.value.length > 14
            )
              return;
            setUser({ ...user, phoneNumber: e.target.value });
            var phoneRegex =
              /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (phoneRegex.test(e.target.value)) {
              setError({
                ...error,
                phoneNumber: false,
              });
              let formattedPhoneNumber = e.target.value.replace(
                phoneRegex,
                "($1) $2-$3"
              );
              setUser({ ...user, phoneNumber: formattedPhoneNumber });
            } else {
              setError({
                ...error,
                phoneNumber: e.target.value.length > 0 ? true : false,
              });
            }
          }}
        />
      </div>

      <div className="row">
        <TextField
          required
          id="filled-required"
          label="Address"
          fullWidth
          variant="standard"
          value={user.address}
          onChange={(e) => {
            setUser({ ...user, address: e.target.value });
          }}
        />
      </div>

      <div className="next-section">
        <Button
          disabled={isDisabled()}
          variant="contained"
          style={{ width: 150 }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserInfoForm;
