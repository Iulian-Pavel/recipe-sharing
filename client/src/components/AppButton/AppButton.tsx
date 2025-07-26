import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import styles from "~/components/AppButton/AppButton.module.scss";

type AppButtonProps = {
  buttonText: string;
};

function AppButton({ buttonText }: AppButtonProps) {
  return (
    // Need to wrap the button in a div to avoid style collision with MUI internals
    <Box component="div">
      <Button
        variant="outlined"
        className={styles["app-button"]}
        type="submit"
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default AppButton;
