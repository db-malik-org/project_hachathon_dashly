import React from "react";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import home from "../../../assets/landing/tax.jpg";
import { useHeroStyles } from "./styles";
import { goToInstall } from "../../../helpers/links";

const Hero = () => {
  const { classes } = useHeroStyles();
  return (
    <Container size="xl" className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Simplifiez la gestion{" "}
          <span className={classes.highlight}>Fiscale</span>
          <br />
          en utilisant une{" "}
          <span className={classes.highlight}>Comparaison</span>
          <br />
          d'impôts entre les <span className={classes.highlight}>régions.</span>
        </Title>
        <Text color="dimmed" mt="md">
          L'Appel à l'Utilisation de l'Analyse Comparative de l'Impôt sur la
          Fortune Immobilière entre les Régions pour une Gestion Équitable et
          Informed
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={rem(12)} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <List.Item style={{ color: "white" }}>
            <b>Précis</b> – Les sources de données sont exactes et fiables.
          </List.Item>
          <List.Item style={{ color: "white" }}>
            <b>Facile</b> – Facile et rapide à utiliser.
          </List.Item>
          <List.Item style={{ color: "white" }}>
            <b>Visualisation</b> – Toutes les données sont présentées sous forme
            de graphique, ce qui facilite la compréhension
          </List.Item>
        </List>

        <Group mt={30}>
          <Button
            radius="xl"
            size="xl"
            className={classes.control}
            onClick={() => goToInstall()}
          >
            Entrez
          </Button>
        </Group>
      </div>

      <Image src={home} className={classes.image} />
    </Container>
  );
};

export default Hero;
