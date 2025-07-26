import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import AppButton from "~/components/AppButton/AppButton";

import chef_hat from "~/assets/images/chef_hat.png";
import styles from "~/components/Header/Header.module.scss";

type HeaderProps = {
  headerText: string;
  headerTitle: string;
  headerCoverImage: string;
};

function Header({ headerText, headerTitle, headerCoverImage }: HeaderProps) {
  return (
    <Box
      component="div"
      className={styles["header"]}
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                          url(${headerCoverImage})`,
        backgroundSize: "cover",
      }}
    >
      <Box component="img" src={chef_hat} sx={{ width: "5%" }}></Box>
      <Typography variant="h3" className={styles["header-title"]}>
        {headerTitle}
      </Typography>
      <Typography variant="h4" className={styles["header-text"]}>
        {headerText}
      </Typography>
      <AppButton buttonText="Upload" />
    </Box>
  );
}

export default Header;
