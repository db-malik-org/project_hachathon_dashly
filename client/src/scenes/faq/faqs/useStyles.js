import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  form: {
    paddingTop: theme.spacing.md,
    backgroundColor: "#191F45",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
