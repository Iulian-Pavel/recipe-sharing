import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";


import type { SignInTypes } from "~/types/signInTypes";
import { useSignInMutation } from "~/pages/SignIn/api/signInApi";

import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import styles from "~/pages/SignIn/SignIn.module.scss";


function SignIn() {
  const { register, handleSubmit } = useForm<SignInTypes>();
  const [signIn, { error, isLoading }] = useSignInMutation();
  const navigate = useNavigate();

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    console.log("Loading");
  }

  const submitFormData = async (data: SignInTypes) => {
    try {
      const result = await signIn(data).unwrap();
      console.log(result);
      navigate("/");
    } catch {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      className={styles["sign-in-container"]}
      onSubmit={handleSubmit(submitFormData)}
    >
      <Box className={styles["sign-in-form"]}>
        <TextField
          {...register("username")}
          id="username"
          label="Username"
          name="username"
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
          {...register("password")}
          id="password"
          label="Password"
          type="password"
          name="password"
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
        <Button variant="outlined" sx={{ textTransform: "none" }} type="submit">
          Sign In
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
