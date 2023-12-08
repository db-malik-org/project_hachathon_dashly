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
          Simplify Your <span className={classes.highlight}>Taxation</span>
          <br />
          Maximize Your <span className={classes.highlight}>Resources</span>
          <br />
          Dashly Tax Analysis Just for You!
        </Title>
        <Text color="dimmed" mt="md">
          Pour vérifier la situation fiscale de votre région, sélectionnez
          simplement votre région et des tableaux magnifiquement détaillés vous
          diront tout, le tout gratuitement !
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
          <List.Item>
            <b>Précis</b> – Les sources de données sont exactes et fiables.
          </List.Item>
          <List.Item>
            <b>Facile</b> – Facile et rapide à utiliser.
          </List.Item>
          <List.Item>
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
