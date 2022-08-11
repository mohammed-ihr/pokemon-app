import MuiAlert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import * as React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar = (props) => {
  const { open, message, setOpen } = props;

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <>
      <MuiSnackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </MuiSnackbar>
    </>
  );
};

export default Snackbar;
