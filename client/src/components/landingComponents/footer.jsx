import React from "react";
import { Container, Group, Anchor, Text } from "@mantine/core";
import HelixLogo from "./logo";
import { useComponentsStyles } from "./styles";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const links = [
  { label: "Contactez-nous", link: "/contact" },
  { label: "loi", link: "/legal" },
  { label: "politique de confidentialité", link: "/privacy" },
  { label: "Politique en matière de cookies", link: "/cookie" },
  { label: "Termes et conditions", link: "/terms" },
  { label: "F&Q", link: "/faq" },
  {
    label: "Docs",
    link: "https://github.com/db-malik-org/project_hachathon_dashly#readme",
  },
  {
    label: "GitHub",
    link: "https://github.com/db-malik-org/project_hachathon_dashly",
  },
];

const socialLinks = [
  { icon: IconBrandFacebook, link: "https://www.facebook.com" },
  { icon: IconBrandInstagram, link: "https://www.instagram.com" },
  { icon: IconBrandTwitter, link: "https://www.twitter.com" },
  { icon: IconBrandLinkedin, link: "https://www.linkedin.com" },
  { icon: IconBrandYoutube, link: "https://www.youtube.com" },
];

const Footer = () => {
  const { classes } = useComponentsStyles().footer();
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
      style={{ display: "flex", alignItems: "center" }}
    >
      {link.label}
    </Anchor>
  ));
  const socialItems = socialLinks.map((link) => (
    <Anchor
      color="dimmed"
      key={link.link}
      href={link.link}
      size="sm"
      style={{ display: "flex", alignItems: "center" }}
    >
      <link.icon style={{ marginRight: "0.5rem" }} />
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
        <Group className={classes.socialLinks}>{socialItems}</Group>
      </Container>
      <Container className={classes.inner}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Text color="dimmed" size="sm">
            © 2021 Dashly. All rights reserved.
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
