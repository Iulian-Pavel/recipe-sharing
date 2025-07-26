import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router";
import { Link } from "react-router";

import { useForm } from "react-hook-form";

import type { SignInTypes } from "~/types/signInTypes";
import { useSignInMutation } from "~/pages/SignIn/api/signInApi";
import { paths } from "~/routes/config";

import ErrorDialog from "~/components/ErrorDialog/ErrorDialog";
import AppButton from "~/components/AppButton/AppButton";

import cooking_img from "~/assets/images/cooking.jpg";

import styles from "~/pages/SignIn/SignIn.module.scss";

import generics from "~/generics.json";

function SignIn() {
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<SignInTypes>();
  const [signIn] = useSignInMutation();
  const navigate = useNavigate();

  const submitFormData = async (data: SignInTypes) => {
    try {
      const result = await signIn(data).unwrap();
      console.log(result);
      navigate(paths.home);
    } catch (error) {
      setErrorOpen(true);
    }
  };

  return (
    <Box
      component="form"
      className={styles["sign-in-container"]}
      onSubmit={handleSubmit(submitFormData)}
    >
      <Box
        component="img"
        className={styles["img-container"]}
        src={cooking_img}
      ></Box>
      <Box className={styles["sign-in-form"]}>
        <Typography
          component="h1"
          sx={{
            fontSize: "3em",
          }}
        >
          {generics.SignInPage[0].title}
        </Typography>
        <Typography component="h1">
          {generics.SignInPage[0].WelcomeMessage}
        </Typography>
        <TextField
          {...register("username")}
          id="username"
          label="Username"
          name="username"
          variant="outlined"
          size="medium"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "orange",
              },
              "&:hover fieldset": {
                borderColor: "orange",
              },
              "&.MuiFocused fieldset": {
                borderColor: "orange",
              },
            },
          }}
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
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "orange",
              },
              "&:hover fieldset": {
                borderColor: "darkorange",
              },
              "&.Mui-focused fieldset": {
                borderColor: "orange",
              },
            },
          }}
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
        <AppButton buttonText="Sign in"/>
        <Typography variant="body2">
          {generics.SignInPage[0].SignUpText} <Link to="/">Sign up</Link>
        </Typography>
      </Box>
      <ErrorDialog open={errorOpen} onClose={() => setErrorOpen(false)} />
    </Box>
  );
}

export default SignIn;
