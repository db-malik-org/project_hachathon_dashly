import React from "react";
import { Container, Group, Anchor, Text } from "@mantine/core";
import HelixLogo from "./logo";
import { useComponentsStyles } from "./styles";

const links = [
  { label: "Docs", link: "https://github.com/db-malik-org/project_hachathon_dashly#readme" },
  {
    label: "GitHub",
    link: "https://github.com/db-malik-org/project_hachathon_dashly",
  },
];

const Footer = () => {
  const { classes } = useComponentsStyles().footer();
  const items = links.map((link) => (
    <a color="dimmed" key={link.label} href={link.link} size="sm">
      {link.label}
    </a>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <HelixLogo />
        <Text size="sm" color="dimmed">
          © 2023 Dashly Tax Review
        </Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
};

export default Footer;
