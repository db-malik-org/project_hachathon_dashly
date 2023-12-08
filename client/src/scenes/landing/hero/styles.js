import { createStyles, rem } from "@mantine/core";

const useHeroStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    paddingTop: `calc(${theme.spacing.xl} * 1)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    alignItems: "center",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      padding: theme.spacing.xl,
    },
  },

  content: {
    flex: 1,
    // maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: "white",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    lineHeight: 2,
    fontWeight: 800,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    borderRadius: "50px",
    overflow: "hidden",
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      marginTop: theme.spacing.xl,
    },
  },

    highlight: {
      position: "relative",
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
      color: "black", // Change the text color to black
    },
  }));

export { useHeroStyles };
