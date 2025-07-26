import Box from "@mui/material/Box";
import styles from "~/components/Tags/Tags.module.scss";

import { tags } from "~/components/Tags/tags";

function Tags() {
  return (
    <Box className={styles["tags"]}>
      {tags.map((tag) => (
        <Box className={styles["tag"]}>
          <p>{tag.tag}</p>
        </Box>
      ))}
    </Box>
  );
}

export default Tags;
