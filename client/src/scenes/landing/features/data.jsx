import { Text } from "@mantine/core";
import {
  IconChartBar,
  IconChartPie,
  IconChartTreemap,
  IconBrandGoogleMaps,
  IconChartBarOff,
} from "@tabler/icons-react";

const featuresData = [
  {
    title: "le nombre moyen de contribuables par région",
    description: (
      <Text>
        Un diagramme circulaire montrant le nombre moyen de contribuables dans
        chaque zone, étiqueté par des pourcentages.
      </Text>
    ),
    icon: IconChartPie,
  },
  {
    title: "la moyenne d'impôt en Euro par année",
    description: (
      <Text>
        Affiche la taxe moyenne totale par année sous forme de diagramme à
        barres.
      </Text>
    ),
    icon: IconChartBar,
  },
  {
    title: "la moyenne d'impôt en Euro par région et département",
    description: (
      <Text>
        Recettes fiscales moyennes par région et province présentées sous forme
        d'arborescence rectangulaire.
      </Text>
    ),
    icon: IconChartTreemap,
  },
  {
    title: "map de la moyenne d'impôt en Euro par région ",
    description: (
      <Text>
        Les taxes moyennes par région sont indiquées sur le plan de la France.
      </Text>
    ),
    icon: IconBrandGoogleMaps,
  },
  {
    title: "la moyenne d'impôt en Euro par région",
    description: (
      <Text>
        Sous forme de diagramme à barres, les impôts de chaque région sont
        classés du plus grand au plus petit.
      </Text>
    ),
    icon: IconChartBarOff,
  },
];

export { featuresData };
