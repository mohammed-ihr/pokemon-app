import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../state/UserContext";
import "./styles/userInfoForm.styles.css";

const UserInfoForm = () => {
  const { actions, user, error } = useContext(UserContext);
  let navigate = useNavigate();

  const isDisabled = () => {
    if (Object.values(user).some((info) => info === "")) return true;
    if (Object.values(error).some((errorState) => errorState === true))
      return true;
    return false;
  };

  return (
    <div className="user-info-form">
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
            actions.setFirstNameError(!isValid);
            actions.setFirstName(e.target.value);
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
          value={user.lastName}
          error={error.lastName}
          helperText={error.lastName ? "Please enter a valid last name." : " "}
          onChange={(e) => {
            let isValid = true;
            if (e.target.value) {
              isValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(
                e.target.value.trim()
              );
            }
            actions.setLastNameError(!isValid);
            actions.setLastName(e.target.value);
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

            actions.setPhoneNumber(e.target.value);
            var phoneRegex =
              /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            if (phoneRegex.test(e.target.value)) {
              actions.setPhoneNumberError(false);
              let formattedPhoneNumber = e.target.value.replace(
                phoneRegex,
                "($1) $2-$3"
              );
              actions.setPhoneNumber(formattedPhoneNumber);
            } else {
              actions.setPhoneNumberError(
                e.target.value.length > 0 ? true : false
              );
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
            actions.setAddress(e.target.value);
          }}
        />
      </div>

      <div className="next-section">
        <Button
          disabled={isDisabled()}
          variant="contained"
          style={{ width: 150 }}
          onClick={() => {
            navigate("/pokemon");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default UserInfoForm;
