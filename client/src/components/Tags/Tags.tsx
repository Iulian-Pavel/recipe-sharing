import Box from "@mui/material/Box";
import styles from "~/components/Tags/Tags.module.scss";

import { foodTags } from "~/components/Tags/foodTags";

function Tags() {
  return (
    <Box className={styles["tags"]}>
      {foodTags.map((foodTag) => (
        <Box className={styles["tag"]}>
          <p>{foodTag.tag}</p>
        </Box>
      ))}
    </Box>
  );
}

export default Tags;
