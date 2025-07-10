import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";

import styles from "./SignIn.module.scss";

function SignIn() {
  return (
    <Box component="form" className={styles["sign-in-container"]}>
      <Box className={styles["sign-in-form"]}>
        <TextField
          id="username"
          label="Username"
          variant="standard"
          size="medium"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="standard"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
